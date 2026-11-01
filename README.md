# OmniTip

> OmniTip is a decentralized universal payment and tip jar powered by NEAR Intents, Chain Signatures, and HOT Wallet.

## Overview
OmniTip is built to empower people, simplify real-world economic activities, and make transactions seamless. It enables content creators, developers, and everyday users to receive tips and payments across multiple blockchains (NEAR, Ethereum, Solana, Bitcoin) without requiring supporters to manually swap tokens or acquire native gas.

## Backend & Technical Architecture
OmniTip leverages cutting-edge NEAR ecosystem primitives to handle cross-chain state and settlement seamlessly:
1. **Universal Tipping & Payments (Chain Signatures):** Multi-party computation (MPC) enabled smart contracts on NEAR securely sign and execute native transactions across external blockchains (Ethereum, Solana, Bitcoin) without needing custom bridges.
2. **Intent-Based Routing (NEAR Intents & Solver Networks):** Users specify their preferred payment asset and source chain (e.g., USDC on Base or Ethereum). Decentralized solvers match and execute these intents in the background, ensuring the recipient instantly receives their desired asset on NEAR.
3. **Frictionless Authentication & Session Management:** Integrates natively with **HOT Wallet** and standard NEAR Wallet Selectors for instant gasless or low-friction onboarding.
4. **Data & State Management:** Lightweight client-side components interfacing with decentralized data schemas to track creator profiles, unique tipping links (`/[username]`), and transaction histories.

## Tech Stack
* **Frontend / UI:** React, Next.js, HTML/CSS
* **Core Blockchain Protocols:** NEAR Protocol, NEAR Intents, Chain Signatures, Solver Network
* **Wallets & Auth:** HOT Wallet, NEAR Wallet Selector

## Project Structure
* `index.jsx` - Main landing page, universal payment interface, and profile link generator.
* `[username].jsx` - Dynamic creator profile, custom tipping router, and cross-chain payment selector.
* `package.json` - Project metadata, scripts, and ecosystem dependencies.
