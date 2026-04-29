# AetherVoice – Vendor Verification Agent

## What it does
AetherVoice verifies vendor responses before payments are released.

## Problem
Businesses rely on verbal confirmations, which can be vague or unreliable.

## Solution
This agent analyzes vendor responses and outputs a clear decision:

- VERIFIED → Safe to proceed  
- RISK → Requires review  

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
