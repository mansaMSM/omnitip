import React, { useState } from "react";

export default function OmniTip() {
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");

  const handleTip = () => {
    if (!recipient || !amount) {
      alert("Please enter recipient and amount!");
      return;
    }
    alert(`Sending ${amount} NEAR to ${recipient} via NEAR Intents! 🚀`);
  };

  return (
    <div style={{ padding: "25px", fontFamily: "Arial, sans-serif", maxWidth: "420px", margin: "40px auto", background: "#121212", color: "#fff", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.3)" }}>
      <h2 style={{ color: "#00EC97", textAlign: "center" }}>🚀 OmniTip</h2>
      <p style={{ textAlign: "center", fontSize: "14px", color: "#aaa" }}>Universal Tip Jar powered by NEAR Intents</p>
      
      <div style={{ marginTop: "20px" }}>
        <label style={{ fontSize: "12px", color: "#ccc" }}>Recipient NEAR Account</label>
        <input
          type="text"
          placeholder="e.g. mansa.near"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          style={{ width: "100%", padding: "12px", margin: "8px 0 16px 0", background: "#222", border: "1px solid #444", color: "#fff", borderRadius: "6px", boxSizing: "border-box" }}
        />
        
        <label style={{ fontSize: "12px", color: "#ccc" }}>Amount (NEAR)</label>
        <input
          type="number"
          placeholder="0.1"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ width: "100%", padding: "12px", margin: "8px 0 20px 0", background: "#222", border: "1px solid #444", color: "#fff", borderRadius: "6px", boxSizing: "border-box" }}
        />
        
        <button
          onClick={handleTip}
          style={{ width: "100%", padding: "14px", background: "#00EC97", color: "#000", border: "none", fontWeight: "bold", fontSize: "16px", borderRadius: "6px", cursor: "pointer" }}
        >
          Tip via NEAR Intents ⚡
        </button>
      </div>
    </div>
  );
}
