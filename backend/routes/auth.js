const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// User registration
router.post("/register", async (req, res) => {
  try {
    const { name, username, password } = req.body;

    // Validate request data
    if (!name || !username || !password) {
      return res.status(400).send("All fields (name, username, password) are required.");
    }

    // Check if the username already exists
    const userExists = await User.findOne({ username });
    if (userExists) {
      return res.status(400).send("Username already exists");
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      name,
      username,
      password: hashedPassword // Save the hashed password
    });

    await newUser.save();
    res.status(201).send("User registered successfully");
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).send("Internal Server Error");
  }
})

// User login
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).send("Invalid credentials");
    }

    // Check if the password is correct
    const isMatch = await user.isValidPassword(password);
    if (!isMatch) {
      return res.status(400).send("Invalid credentials");
    }

    res.send("Login successful");
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
