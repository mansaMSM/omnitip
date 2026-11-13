import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function OmniTipApp() {
  const router = useRouter();
  const [walletConnected, setWalletConnected] = useState(false);
  const [accountId, setAccountId] = useState('');
  const [username, setUsername] = useState('');
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('home'); // 'home', 'dashboard', 'invite'

  // Simulate Connecting NEAR / HOT Wallet
  const connectWallet = () => {
    // In production, integrate NEAR Wallet Selector here
    const mockUser = 'mansaMSM.near';
    setAccountId(mockUser);
    setUsername('mansaMSM');
    setWalletConnected(true);
  };

  const disconnectWallet = () => {
    setWalletConnected(false);
    setAccountId('');
    setUsername('');
  };

  const shareableLink = typeof window !== 'undefined' ? `${window.location.origin}/${username}` : `https://omnitip.vercel.app/${username}`;
  const inviteLink = typeof window !== 'undefined' ? `${window.location.origin}/?ref=${username}` : `https://omnitip.vercel.app/?ref=${username}`;

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '480px', margin: '0 auto', background: '#0f172a', color: '#fff', minHeight: '100vh', borderRadius: '12px' }}>
      
      {/* Header & Wallet Connect */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px', borderBottom: '1px solid #1e293b', paddingBottom: '15px' }}>
        <h2 style={{ margin: 0, color: '#00EC97' }}>⚡ OmniTip</h2>
        {!walletConnected ? (
          <button onClick={connectWallet} style={{ background: '#00EC97', color: '#000', border: 'none', padding: '10px 16px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
            Connect Wallet 🔌
          </button>
        ) : (
          <button onClick={disconnectWallet} style={{ background: '#334155', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: '8px', fontSize: '12px', cursor: 'pointer' }}>
            {accountId.slice(0, 8)}... (Disconnect)
          </button>
        )}
      </div>

      {/* Navigation Tabs if Connected */}
      {walletConnected && (
        <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
          <button onClick={() => setActiveTab('home')} style={{ flex: 1, padding: '8px', background: activeTab === 'home' ? '#00EC97' : '#1e293b', color: activeTab === 'home' ? '#000' : '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold' }}>Find / Tip</button>
          <button onClick={() => setActiveTab('dashboard')} style={{ flex: 1, padding: '8px', background: activeTab === 'dashboard' ? '#00EC97' : '#1e293b', color: activeTab === 'dashboard' ? '#000' : '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold' }}>Dashboard</button>
          <button onClick={() => setActiveTab('invite')} style={{ flex: 1, padding: '8px', background: activeTab === 'invite' ? '#00EC97' : '#1e293b', color: activeTab === 'invite' ? '#000' : '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold' }}>Invite</button>
        </div>
      )}

      {/* TAB 1: HOME / FIND CREATOR */}
      {activeTab === 'home' && (
        <div>
          <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px', marginBottom: '20px' }}>
            <h3 style={{ marginTop: 0 }}>Send Universal Tip 🚀</h3>
            <p style={{ fontSize: '13px', color: '#94a3b8' }}>Support any creator across blockchains instantly using NEAR Intents & Chain Signatures.</p>
            <input
              type="text"
              placeholder="Enter username (e.g. mansaMSM)"
              onKeyDown={(e) => { if (e.key === 'Enter' && e.target.value.trim()) router.push(`/${e.target.value.trim()}`); }}
              style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #334155', background: '#0f172a', color: '#fff', marginTop: '10px' }}
            />
            <span style={{ fontSize: '11px', color: '#64748b', display: 'block', marginTop: '6px' }}>Press Enter to open tip jar</span>
          </div>
        </div>
      )}

      {/* TAB 2: CREATOR DASHBOARD */}
      {activeTab === 'dashboard' && walletConnected && (
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
          <h3 style={{ marginTop: 0, color: '#00EC97' }}>📊 Creator Dashboard</h3>
          <p style={{ fontSize: '13px', color: '#94a3b8' }}>Manage your tip jar settings and share your link.</p>

          <div style={{ background: '#0f172a', padding: '12px', borderRadius: '8px', margin: '15px 0' }}>
            <span style={{ fontSize: '11px', color: '#94a3b8' }}>Your Tip Jar Link:</span>
            <div style={{ fontSize: '14px', wordBreak: 'break-all', color: '#00EC97', margin: '5px 0' }}>{shareableLink}</div>
            <button 
              onClick={() => copyToClipboard(shareableLink, 'jar')}
              style={{ width: '100%', padding: '8px', background: copied === 'jar' ? '#10b981' : '#334155', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
              {copied === 'jar' ? '✅ Copied to Clipboard!' : '📋 Copy Tip Link'}
            </button>
          </div>

          <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
            <div style={{ flex: 1, background: '#0f172a', padding: '12px', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ fontSize: '11px', color: '#94a3b8' }}>Total Tips Received</div>
              <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#00EC97', marginTop: '5px' }}>2.45 NEAR</div>
            </div>
            <div style={{ flex: 1, background: '#0f172a', padding: '12px', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ fontSize: '11px', color: '#94a3b8' }}>Supporters</div>
              <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#00EC97', marginTop: '5px' }}>12</div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: INVITE & REFERRAL SYSTEM */}
      {activeTab === 'invite' && walletConnected && (
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px' }}>
          <h3 style={{ marginTop: 0, color: '#00EC97' }}>🎁 Invite & Earn</h3>
          <p style={{ fontSize: '13px', color: '#94a3b8' }}>Invite other creators to OmniTip and earn protocol reward shares on their received tips.</p>

          <div style={{ background: '#0f172a', padding: '12px', borderRadius: '8px', margin: '15px 0' }}>
            <span style={{ fontSize: '11px', color: '#94a3b8' }}>Your Referral Link:</span>
            <div style={{ fontSize: '14px', wordBreak: 'break-all', color: '#00EC97', margin: '5px 0' }}>{inviteLink}</div>
            <button 
              onClick={() => copyToClipboard(inviteLink, 'invite')}
              style={{ width: '100%', padding: '8px', background: copied === 'invite' ? '#10b981' : '#334155', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
              {copied === 'invite' ? '✅ Invite Link Copied!' : '📋 Copy Invite Link'}
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
