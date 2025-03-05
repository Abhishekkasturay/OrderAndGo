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
  const result = await model.generate(prompt);
  return result.response.text();
  const formattedResponse = result
    .replace(/1\./g, "👉 1.")
    .replace(/2\./g, "👉 2.")
    .replace(/3\./g, "👉 3.")
    .replace(/4\./g, "👉 4.")
    .replace(/\n/g, "\n\n"); 

  return formattedResponse;
}

module.exports = generateAIContent;
