const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const authRoutes = require("./routes/auth");
const trainRoutes = require("./routes/train");
const geminiRoute = require("./routes/geminiRoute");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "https://orderandgo-3.onrender.com", // Frontend URL
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

console.log("MongoDB URI:", process.env.MONGODB_URI);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

app.use("/api/auth", authRoutes);
app.use("/api/trains", trainRoutes);
app.use("/api/gemini", geminiRoute);

app.get('/api/swiggy', async (req, res) => {
  try {
    const { lat, lng, restaurantId } = req.query;

    const swiggyUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${restaurantId}`;

    const response = await fetch(swiggyUrl, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch from Swiggy: ${response.statusText}`);
    }

    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.error('Error fetching Swiggy data:', error);
    res.status(500).send('Error fetching data from Swiggy');
  }
});

app.use(express.static(path.join(__dirname, "frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/build", "index.html"));
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
