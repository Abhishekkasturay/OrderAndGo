import React, { useState } from "react";

const GeminiPrompt = () => {
  const [prompt, setPrompt] = useState("");
  const [aiResponse, setAiResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/gemini/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      setAiResponse(data.response); // AI response from backend
    } catch (error) {
      console.error("Error fetching AI response:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Ask the AI</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt..."
          className="border border-gray-300 p-3 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors"
        >
          Generate AI Response
        </button>
      </form>
      {aiResponse && (
        <div className="mt-6">
          <h3 className="text-lg font-medium">AI Response:</h3>
          <p className="mt-2 p-4 bg-gray-100 rounded-md">{aiResponse}</p>
        </div>
      )}
    </div>
  );
};

export default GeminiPrompt;
