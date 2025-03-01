const express = require("express");
const router = express.Router();
const generateAIContent = require("../geminiService");

router.post("/generate", async (req, res) => {
  const { prompt } = req.body; // Get the prompt from the frontend

  if (!prompt) {
    return res.status(400).send("Prompt is required");
  }

  try {
    const aiResponse = await generateAIContent(prompt);
    res.json({ response: aiResponse });
  } catch (error) {
    res.status(500).send("Failed to generate content");
  }
});

module.exports = router;
