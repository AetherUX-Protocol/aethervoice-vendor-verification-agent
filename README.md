# AetherVoice – Vendor Verification Agent

## One-liner
Voice agent that verifies vendor confirmations before payment decisions.

---

## Problem
Businesses rely on phone confirmations before releasing payments, but these calls are hard to trust and prone to miscommunication or fraud.

---

## Solution
AetherVoice calls vendors, asks structured questions, and produces a clear decision:

- VERIFIED → Safe to proceed
- RISK → Requires review

---

## How It Works

1. Input vendor phone number and context  
2. AI agent calls vendor  
3. Asks key verification questions  
4. Transcript is analyzed using AI  
5. Output decision is generated  

---

## Example Output
Decision: RISK
Confidence: 0.72
Reason: vague delivery timeline and inconsistent answers

---

## Demo
[Add demo video link here]

---

## Use Cases
- Vendor verification before payments  
- Logistics confirmation  
- Procurement validation  

---

## Pricing (Example)
- First 5 calls free  
- Then $0.50 per call  

---

## Status
MVP – Ready for testing and feedback
🧠 2. Add Prompt File

Create:
prompts/verification.txt
You are a business verification assistant.

Analyze the following conversation between an AI agent and a vendor.

Your job is to determine whether the vendor's responses are reliable.

Return output in JSON format:

{
  "decision": "VERIFIED or RISK",
  "confidence": number between 0 and 1,
  "reason": "short explanation"
}

Mark as RISK if:
- responses are vague
- answers are inconsistent
- hesitation or uncertainty is present

Conversation:
{{TRANSCRIPT}}
⚙️ 3. Add Simple Logic File

Create:
logic/analyze.js
const axios = require("axios");

async function analyzeTranscript(text) {
  const response = await axios.post(
    "https://api.aisa.one/v1/chat/completions",
    {
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a fraud detection assistant."
        },
        {
          role: "user",
          content: text
        }
      ]
    },
    {
      headers: {
        Authorization: `Bearer YOUR_AISA_API_KEY`
      }
    }
  );

  return response.data;
}

module.exports = { analyzeTranscript };
