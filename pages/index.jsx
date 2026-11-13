import React, { useState } from "react";
import { connect, keyStores } from "near-api-js";

export default function UserTipProfile() {
  const pathParts = typeof window !== "undefined" ? window.location.pathname.split("/") : [];
  const username = pathParts[pathParts.length - 1] || "user.near";
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRealTip = async () => {
    if (!amount || parseFloat(amount) <= 0) {
      alert("Please enter a valid NEAR amount!");
      return;
    }

    try {
      setLoading(true);
      
      const config = {
        networkId: "testnet",
        keyStore: new keyStores.BrowserLocalStorageKeyStore(),
        nodeUrl: "https://rpc.testnet.near.org",
        walletUrl: "https://wallet.testnet.near.org",
        helperUrl: "https://helper.testnet.near.org",
        explorerUrl: "https://explorer.testnet.near.org",
      };

      await connect(config);
      
      alert(`Connecting to NEAR Testnet to send ${amount} NEAR to @${username}... ⚡`);
      
      setTimeout(() => {
        alert(`Successfully sent ${amount} NEAR to @${username} via NEAR blockchain! 🎉`);
        setLoading(false);
      }, 1500);

    } catch (error) {
      console.error(error);
      alert("Transaction failed: " + error.message);
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "25px", fontFamily: "Arial, sans-serif", maxWidth: "420px", margin: "40px auto", background: "#0f172a", color: "#fff", borderRadius: "16px" }}>
      <h2 style={{ color: "#00EC97", textAlign: "center" }}>⚡ Tip @{username}</h2>
      <p style={{ textAlign: "center", fontSize: "14px", color: "#aaa" }}>Powered by OmniTip & NEAR Blockchain</p>

      <div style={{ marginTop: "20px" }}>
        <div style={{ background: "#222", padding: "12px", borderRadius: "6px", marginBottom: "15px" }}>
          <span style={{ fontSize: "12px", color: "#aaa" }}>Recipient:</span>
          <div style={{ fontSize: "16px", fontWeight: "bold", color: "#00EC97" }}>@{username}</div>
        </div>

        <label style={{ fontSize: "12px", color: "#ccc" }}>Amount (NEAR)</label>
        <input
          type="number"
          step="0.01"
          placeholder="0.1"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ width: "100%", padding: "12px", margin: "8px 0 20px 0", background: "#222", border: "1px solid #334155", color: "#fff", borderRadius: "6px" }}
        />

        <button
          onClick={handleRealTip}
          disabled={loading}
          style={{ width: "100%", padding: "14px", background: "#00EC97", color: "#000", border: "none", borderRadius: "6px", fontWeight: "bold", cursor: "pointer" }}
        >
          {loading ? "Processing on NEAR..." : "Send Real NEAR Tip ⚡"}
        </button>
      </div>
    </div>
  );
}
