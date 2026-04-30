# AetherVoice – Vendor Verification Agent

## What it does
AetherVoice verifies vendor responses before payments are released.

## Problem
Businesses rely on verbal confirmations, which can be vague or unreliable.

## Solution
This agent analyzes vendor responses and outputs a clear decision:

- VERIFIED → Safe to proceed  
- RISK → Requires review
- Architecture: Privacy-First & Sovereign

Local-First: All voice-to-text analysis is processed locally, ensuring sensitive B2B trade data never touches the cloud.

Deterministic Logic: Uses a three-tier confidence gate (42% / 75% / 90%) to automate high-integrity financial decisions.

## How to Run

```bash
node index.js

Enter vendor response when prompted.

Example

Input:
Vendor: Maybe it was delivered… not sure

Output:
Decision: RISK
Confidence: 0.75
Reason: Vendor responses show uncertainty

Use Cases
Vendor verification before payments
Logistics confirmation
Procurement validation
Demo
https://youtu.be/UZQKLeDEzy0
https://youtu.be/UZQKLeDEzy0
"scripts": {
  "start": "node index.js"
}
npm start
