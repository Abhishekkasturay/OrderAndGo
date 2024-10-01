const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const authRoutes = require("./routes/auth");
require("dotenv").config(); // Load environment variables from .env file

const app = express();

// Handle preflight requests for all routes
app.options('*', cors({
  origin: 'https://orderandgo-3.onrender.com', // Frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));

// Enable CORS for the deployed frontend URL
app.use(cors({
  origin: 'https://orderandgo-3.onrender.com', // Frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// Use body-parser to parse JSON requests
app.use(bodyParser.json());

// Debug: Print the MongoDB URI to verify it's being loaded correctly
console.log("MongoDB URI:", process.env.MONGODB_URI);

// Connect to MongoDB Atlas using the environment variable
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit process with failure
  });

// Use routes for authentication
app.use("/api/auth", authRoutes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/build", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
