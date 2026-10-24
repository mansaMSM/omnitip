import React, { useState } from "react";

export default function UserTipProfile() {
  const pathParts = window.location.pathname.split("/");
  const username = pathParts[pathParts.length - 1] || "user.near";
  const [amount, setAmount] = useState("");

  const handleTip = () => {
    if (!amount) {
      alert("Please enter an amount to tip!");
      return;
    }
    alert(`Tipping ${amount} NEAR to ${username} via NEAR Intents! 🚀`);
  };

  return (
    <div style={{ padding: "25px", fontFamily: "Arial, sans-serif", maxWidth: "420px", margin: "40px auto", background: "#121212", color: "#fff", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.3)" }}>
      <h2 style={{ color: "#00EC97", textAlign: "center" }}>🚀 Tip @{username}</h2>
      <p style={{ textAlign: "center", fontSize: "14px", color: "#aaa" }}>Powered by OmniTip & NEAR Intents</p>
      
      <div style={{ marginTop: "20px" }}>
        <div style={{ background: "#222", padding: "12px", borderRadius: "6px", marginBottom: "16px", textAlign: "center" }}>
          <span style={{ fontSize: "12px", color: "#aaa" }}>Recipient:</span>
          <div style={{ fontSize: "16px", fontWeight: "bold", color: "#00EC97" }}>{username}</div>
        </div>
        
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
          Send Tip via NEAR Intents ⚡
        </button>
      </div>
    </div>
  );
  
        }
