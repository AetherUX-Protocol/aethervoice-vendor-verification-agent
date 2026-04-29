async function analyzeTranscript(transcript) {
  const text = transcript.toLowerCase();

  // 🔴 Strong risk signals
  if (
    text.includes("not sure") ||
    text.includes("maybe") ||
    text.includes("don't know") ||
    text.includes("uncertain")
  ) {
    return {
      decision: "RISK",
      confidence: 0.75,
      riskScore: 75,
      reason: "Vendor responses show uncertainty"
    };
  }

  // 🟠 Medium risk signals
  if (
    text.includes("think") ||
    text.includes("probably")
  ) {
    return {
      decision: "RISK",
      confidence: 0.6,
      riskScore: 60,
      reason: "Vendor responses are not fully confident"
    };
  }

  // 🟢 Positive signals
  if (
    (text.includes("delivered") && text.includes("received")) ||
    text.includes("confirmed") ||
    text.includes("completed")
  ) {
    return {
      decision: "VERIFIED",
      confidence: 0.9,
      riskScore: 10,
      reason: "Clear and confident response"
    };
  }

  // ⚠️ Missing key info
  if (!text.includes("delivered")) {
    return {
      decision: "RISK",
      confidence: 0.65,
      riskScore: 65,
      reason: "No clear delivery confirmation"
    };
  }

  // 🔶 Default fallback
  return {
    decision: "RISK",
    confidence: 0.5,
    riskScore: 50,
    reason: "Insufficient or unclear information"
  };
}

module.exports = { analyzeTranscript };
