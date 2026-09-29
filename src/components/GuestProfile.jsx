import React from 'react';
import { UserCheck, Award, Zap, RefreshCw, ShieldCheck } from 'lucide-react';

export default function GuestProfile({ guestSession, resetGuestSession }) {
  const completedCount = Object.keys(guestSession.completedLabs || {}).length;

  return (
    <div className="cyber-card" style={{ marginBottom: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(0, 243, 255, 0.2), rgba(0, 255, 136, 0.2))',
            border: '2px solid var(--accent-cyan)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <UserCheck size={28} color="var(--accent-cyan)" />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <h3 className="font-mono" style={{ fontSize: '1.1rem', fontWeight: 700 }}>
                {guestSession.guestId}
              </h3>
              <span className="cyber-badge badge-green">Auto-Guest Mode</span>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>
              No sign-up needed. Progress and score saved in your local browser session.
            </p>
          </div>
        </div>

        {/* Stats Chips */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)', padding: '0.6rem 1rem', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block' }}>SCORE</span>
            <span className="font-mono" style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--accent-cyan)' }}>
              {guestSession.score} PTS
            </span>
          </div>

          <div style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)', padding: '0.6rem 1rem', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block' }}>LABS SOLVED</span>
            <span className="font-mono" style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--accent-green)' }}>
              {completedCount} / 3
            </span>
          </div>

          <button
            onClick={resetGuestSession}
            className="cyber-btn cyber-btn-secondary"
            title="Reset local guest profile"
            style={{ fontSize: '0.8rem' }}
          >
            <RefreshCw size={14} /> Reset Session
          </button>
        </div>
      </div>

      {/* Badges unlocked */}
      <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px dashed var(--border-color)', display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>EARNED BADGES:</span>
        {completedCount >= 1 && <span className="cyber-badge badge-cyan"><Award size={12}/> Phish Hunter I</span>}
        {completedCount >= 2 && <span className="cyber-badge badge-green"><Zap size={12}/> Voice Defender</span>}
        {completedCount >= 3 && <span className="cyber-badge badge-amber"><ShieldCheck size={12}/> Anti-Phishing Specialist</span>}
        {completedCount === 0 && <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', italic: true }}>Complete any lab below to unlock badges.</span>}
      </div>
    </div>
  );
}
