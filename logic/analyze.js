const axios = require("axios");

// Replace with your AIsa API key
const API_KEY = "YOUR_AISA_API_KEY";

async function analyzeTranscript(transcript) {
  try {
    const response = await axios.post(
      "https://api.aisa.one/v1/chat/completions",
      {
        model: "gpt-4o-mini", // use any available model from AIsa
        messages: [
          {
            role: "system",
            content: `
You are a business verification assistant.

Analyze the conversation and classify it as:
- VERIFIED (clear, consistent answers)
- RISK (vague, inconsistent, or uncertain answers)

Return ONLY JSON in this format:

{
  "decision": "VERIFIED or RISK",
  "confidence": number between 0 and 1,
  "reason": "short explanation"
}
            `
          },
          {
            role: "user",
            content: transcript
          }
        ]
      },
      {
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    const result = response.data.choices[0].message.content;

    // Try parsing JSON safely
    try {
      return JSON.parse(result);
    } catch (e) {
      return {
        decision: "UNKNOWN",
        confidence: 0,
        reason: "Failed to parse response",
        raw: result
      };
    }

  } catch (error) {
    console.error("Error calling AIsa API:", error.message);
    return {
      decision: "ERROR",
      confidence: 0,
      reason: "API call failed"
    };
  }
}

module.exports = { analyzeTranscript };
