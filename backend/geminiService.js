require("dotenv").config(); // To load environment variables

const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
  systemInstruction: `
You are a code reviewer with expertise in JavaScript, React, and Node.js. Your goal is to:
1. Ensure the code follows best practices for readability, maintainability, and performance.
2. Identify and resolve security vulnerabilities.
3. Suggest ways to refactor code into modular, reusable components.
4. Provide insights into improving testing coverage and handling edge cases.
5. Suggest improvements to optimize the user experience, ensuring accessibility and smooth performance.
`,
});

const generateAIContent = async (prompt) => {
  try {
    const result = await model.generateContent(prompt);
    return result.response.text;
  } catch (error) {
    console.error("Error generating content:", error);
    throw new Error("AI content generation failed");
  }
};

module.exports = generateAIContent;
