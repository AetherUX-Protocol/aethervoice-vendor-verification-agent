const axios = require("axios");
const fs = require("fs");
const path = require("path");

const API_KEY = "YOUR_AISA_API_KEY";

// Load prompt from file
const promptTemplate = fs.readFileSync(
  path.join(__dirname, "../prompts/verification.txt"),
  "utf-8"
);

async function analyzeTranscript(transcript) {
  const prompt = promptTemplate.replace("{{TRANSCRIPT}}", transcript);

  try {
    const response = await axios.post(
      "https://api.aisa.one/v1/chat/completions",
      {
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You are a business verification assistant."
          },
          {
            role: "user",
            content: prompt
          }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    const result = response.data.choices[0].message.content;

    try {
      return JSON.parse(result);
    } catch {
      return { decision: "UNKNOWN", confidence: 0, reason: result };
    }

  } catch (error) {
    return { decision: "ERROR", confidence: 0, reason: error.message };
  }
}

module.exports = { analyzeTranscript };
riskScore: 75
