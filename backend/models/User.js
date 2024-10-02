const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Middleware to hash the password before saving the user model
userSchema.pre("save", async function (next) {
  try {
    // Only hash the password if it has been modified (or is new)
    if (!this.isModified('password')) {
      return next();
    }

    // Generate salt for hashing
    const salt = await bcrypt.genSalt(10);

    // Hash the password with the generated salt
    this.password = await bcrypt.hash(this.password, salt);

    // Proceed to the next middleware or save the user
    next();
  } catch (error) {
    return next(error); // Pass any errors to the next middleware
  }
});

// Method to check if the entered password matches the hashed password
userSchema.methods.isValidPassword = async function (enteredPassword) {
  try {
    // Compare entered password with the hashed password stored in the database
    return await bcrypt.compare(enteredPassword, this.password);
  } catch (error) {
    throw new Error("Password comparison failed");
  }
};

// Create the User model from the schema
const User = mongoose.model("User", userSchema);

module.exports = User;
