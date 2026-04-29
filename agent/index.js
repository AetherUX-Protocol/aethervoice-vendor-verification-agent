const { analyzeTranscript } = require("./logic/analyze");

async function runAgent() {
  const transcript = `
  Vendor: Yes, delivery happened... maybe yesterday...
  Vendor: I am not sure who received it.
  `;

  const result = await analyzeTranscript(transcript);

  console.log("Agent Output:", result);
}

runAgent();
