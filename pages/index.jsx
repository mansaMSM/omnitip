import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const [username, setUsername] = useState('');
  const router = useRouter();

  const handleCreateProfile = (e) => {
    e.preventDefault();
    if (username.trim()) {
      router.push(`/${username.trim()}`);
    }
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto', background: '#0f172a', color: '#fff', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>⚡ OmniTip</h1>
      <p style={{ color: '#94a3b8', marginBottom: '30px' }}>
        Decentralized universal payment and tip jar powered by NEAR Intents, Chain Signatures, and HOT Wallet.
      </p>

      <form onSubmit={handleCreateProfile} style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
        <h3 style={{ marginBottom: '15px' }}>Enter Creator Username</h3>
        <input
          type="text"
          placeholder="Misali: mansaMSM"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #334155', background: '#0f172a', color: '#fff', marginBottom: '15px' }}
        />
        <button type="submit" style={{ width: '100%', padding: '12px', background: '#10b981', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
          Buɗe Tip Jar 🚀
        </button>
      </form>
    </div>
  )
    ;
          }
