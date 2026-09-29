import React from 'react';
import { ShieldAlert, BookOpen, Terminal, Newspaper, FolderGit2, UserCheck } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, guestSession }) {
  const tabs = [
    { id: 'intro', label: 'Overview & History', icon: BookOpen },
    { id: 'labs', label: 'Phishing Labs (3)', icon: Terminal },
    { id: 'news', label: 'Threat News', icon: Newspaper },
    { id: 'resources', label: 'Resources & Defense', icon: FolderGit2 }
  ];

  return (
    <header style={{
      background: 'rgba(18, 24, 36, 0.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-color)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0.85rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        {/* Brand Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }} onClick={() => setActiveTab('intro')}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(255, 51, 102, 0.2), rgba(0, 243, 255, 0.2))',
            border: '1px solid var(--accent-cyan)',
            padding: '0.5rem',
            borderRadius: 'var(--radius-sm)',
            display: 'flex',
            alignItems: 'center'
          }}>
            <ShieldAlert size={26} color="var(--accent-cyan)" />
          </div>
          <div>
            <h1 className="font-mono text-gradient" style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
              Do.Not.Click
            </h1>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              PHISHING AWARENESS SIMULATOR v1.0
            </span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav style={{ display: 'flex', gap: '0.35rem', background: 'var(--bg-primary)', padding: '0.3rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="cyber-btn"
                style={{
                  background: isActive ? 'var(--bg-card-hover)' : 'transparent',
                  color: isActive ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                  border: isActive ? '1px solid var(--accent-cyan-glow)' : '1px solid transparent',
                  borderRadius: 'var(--radius-sm)',
                  padding: '0.45rem 0.9rem',
                  fontSize: '0.85rem'
                }}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Guest Session Chip */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          padding: '0.4rem 0.8rem',
          borderRadius: '9999px',
          fontSize: '0.82rem',
          fontFamily: 'var(--font-mono)'
        }}>
          <UserCheck size={16} color="var(--accent-green)" />
          <span style={{ color: 'var(--text-secondary)' }}>ID:</span>
          <span style={{ color: 'var(--accent-green)', fontWeight: 700 }}>{guestSession?.guestId || 'GUEST-AUTO'}</span>
          <span style={{
            background: 'var(--accent-cyan-glow)',
            color: 'var(--accent-cyan)',
            padding: '0.1rem 0.4rem',
            borderRadius: '4px',
            fontSize: '0.7rem'
          }}>
            {guestSession?.score || 0} PTS
          </span>
        </div>
      </div>
    </header>
  );
}
