require("dotenv").config(); // To load environment variables

const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
  systemInstruction: `
You are an AI assistant with expertise in food recommendations and travel planning. Your goal is to:
1. Suggest healthy food options and explain their health benefits.
2. Provide recommendations for popular travel destinations in India, focusing on vacation spots.
3. Always include the nearby railway station for each recommended travel destination, as the booking is railway-focused (no airports).
4. Recommend the famous food from the localities of the vacation spots, considering food delivery via Swiggy-like apps.
5. Ensure that your suggestions optimize the user experience, providing accessible and convenient travel and food options.

`,
});

async function generateAIContent(prompt) {
  const result = await model.generateContent(prompt);
  return result.response.text(); 
}

module.exports = generateAIContent;
