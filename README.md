# 🚀 OmniTip

A decentralized universal tip jar built for the NEAR ecosystem, enabling seamless tipping with NEAR Intents and Chain Signatures.

## 💡 About The Project
OmniTip is a decentralized universal tip jar designed to revolutionize content monetization across blockchains. It breaks down ecosystem barriers by allowing supporters to fund tips from *any* chain (such as NEAR, Ethereum, Solana, or Bitcoin) without needing to manually swap tokens or acquire NEAR first.

## ✨ Key Features & Architecture
* **Universal Tipping (Chain Signatures):** Supporters can send tips using assets from different blockchains (NEAR, Ethereum, Solana, Bitcoin). NEAR smart contracts securely sign and execute transactions cross-chain.
* **Omni-Chain Routing (NEAR Intents):** Powered by NEAR Intents and a robust solver network. A user can choose to pay from any chain or token (e.g., USDC on Base or Ethereum), and the system routes it seamlessly in the background so the creator receives their preferred asset.
* **Frictionless Wallet Login:** Instant connection using popular wallets like **HOT Wallet** and other NEAR ecosystem wallets without complex registration.
* **Personalized Creator Profiles:** Custom tipping links (`/[username]`) for creators and developers.

## 🛠️ Tech Stack
* **Frontend:** React, Next.js, HTML/CSS
* **Blockchain & Protocols:** NEAR Protocol, NEAR Intents, Chain Signatures, Solver Network

## 📂 Project Structure
* `index.jsx` - Landing page and main universal tipping interface.
* `[username].jsx` - Dynamic creator tipping profile.
* `package.json` - Project dependencies and scripts.

---
Built with 💚 for the NEAR Hackathon.
