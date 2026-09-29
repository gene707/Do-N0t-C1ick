import React, { useState } from 'react';
import { Smartphone, ShieldAlert, CheckCircle2, AlertCircle, ArrowRight, ExternalLink, Search, RefreshCw } from 'lucide-react';
import { getLabById } from '../data/labData';

export default function SmishingLab({ onRecordResult }) {
  const lab = getLabById('smishing');
  const [currentScenarioIdx, setCurrentScenarioIdx] = useState(0);
  const [showResultModal, setShowResultModal] = useState(false);
  const [userChoice, setUserChoice] = useState(null);
  const [showUnshortener, setShowUnshortener] = useState(false);

  const scenario = lab.scenarios[currentScenarioIdx];

  const handleDecision = (isPhishingChoice) => {
    setUserChoice(isPhishingChoice);
    setShowResultModal(true);
    const isCorrect = isPhishingChoice === scenario.isPhishing;
    if (onRecordResult) {
      onRecordResult(lab.id, isCorrect, isCorrect ? 100 : 0);
    }
  };

  const handleNextScenario = () => {
    setShowResultModal(false);
    setUserChoice(null);
    setShowUnshortener(false);
    if (currentScenarioIdx < lab.scenarios.length - 1) {
      setCurrentScenarioIdx(prev => prev + 1);
    } else {
      setCurrentScenarioIdx(0);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <span className="cyber-badge badge-amber">{lab.category}</span>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginTop: '0.3rem' }}>{lab.title}</h2>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>{lab.summary}</p>
        </div>
        <div className="font-mono" style={{ fontSize: '0.85rem', color: 'var(--accent-amber)', background: 'var(--bg-secondary)', padding: '0.4rem 0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
          Scenario {currentScenarioIdx + 1} of {lab.scenarios.length}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'start' }}>
        {/* Smartphone Mockup */}
        <div className="phone-mockup">
          <div className="phone-screen">
            {/* Phone Notch */}
            <div className="phone-notch"></div>

            {/* Status Bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 1rem', fontSize: '0.75rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
              <span>{scenario.time}</span>
              <span>5G 🔋 98%</span>
            </div>

            {/* SMS Header */}
            <div style={{ background: '#1e293b', padding: '0.75rem 1rem', borderBottom: '1px solid #334155', textAlign: 'center' }}>
              <strong style={{ fontSize: '0.95rem', color: '#f8fafc', display: 'block' }}>{scenario.senderID}</strong>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{scenario.phoneNumber}</span>
            </div>

            {/* SMS Message Body */}
            <div style={{ flex: 1, padding: '1rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
              <div style={{
                background: '#2563eb',
                color: '#fff',
                padding: '0.85rem 1rem',
                borderRadius: '18px',
                borderBottomLeftRadius: '4px',
                maxWidth: '90%',
                fontSize: '0.88rem',
                lineHeight: 1.5,
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
              }}>
                <p>{scenario.message}</p>
                <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.7)', display: 'block', marginTop: '0.4rem', textAlign: 'right' }}>
                  {scenario.time} • SMS
                </span>
              </div>
            </div>

            {/* Phone Input Bar Fake */}
            <div style={{ background: '#0f172a', padding: '0.75rem', borderTop: '1px solid #1e293b', display: 'flex', gap: '0.5rem' }}>
              <input type="text" disabled placeholder="Text message (read-only lab)" style={{ flex: 1, background: '#1e293b', border: 'none', borderRadius: '16px', padding: '0.4rem 0.8rem', fontSize: '0.8rem', color: '#94a3b8' }} />
            </div>
          </div>
        </div>

        {/* SMS Analysis Tools & Controls */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Analysis Card */}
          <div className="cyber-card">
            <h3 className="font-mono text-gradient" style={{ fontSize: '1.1rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Search size={18} /> Mobile Threat Inspection Tools
            </h3>

            {scenario.linkUrl && (
              <div style={{ marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.3rem' }}>LINK DESTINATION INSPECTION:</span>
                <div style={{ background: 'var(--bg-primary)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                  <code style={{ fontSize: '0.82rem', color: 'var(--accent-amber)', wordBreak: 'break-all', display: 'block' }}>
                    {scenario.linkUrl}
                  </code>

                  <button
                    onClick={() => setShowUnshortener(!showUnshortener)}
                    className="cyber-btn cyber-btn-secondary"
                    style={{ fontSize: '0.78rem', marginTop: '0.6rem', padding: '0.3rem 0.6rem' }}
                  >
                    <ExternalLink size={12} /> {showUnshortener ? 'Hide Redirect Details' : 'Expand URL & WHOIS'}
                  </button>

                  {showUnshortener && (
                    <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px dashed var(--border-color)', fontSize: '0.8rem' }}>
                      <div style={{ color: 'var(--accent-red)', fontWeight: 700, marginBottom: '0.25rem' }}>REAL REDIRECT TARGET:</div>
                      <code style={{ color: '#f43f5e', wordBreak: 'break-all', display: 'block', marginBottom: '0.4rem' }}>{scenario.expandedUrl}</code>
                      <div style={{ color: 'var(--text-muted)' }}>{scenario.domainOwner}</div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Decision Buttons */}
          <div className="cyber-card" style={{ background: 'var(--bg-secondary)' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.75rem' }}>
              What security action do you take?
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <button
                onClick={() => handleDecision(true)}
                className="cyber-btn cyber-btn-danger"
                style={{ padding: '0.85rem 1rem', fontSize: '0.9rem' }}
              >
                <ShieldAlert size={18} /> Flag as FRAUDULENT SMISHING
              </button>
              <button
                onClick={() => handleDecision(false)}
                className="cyber-btn cyber-btn-primary"
                style={{ padding: '0.85rem 1rem', fontSize: '0.9rem', background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' }}
              >
                <CheckCircle2 size={18} /> Mark as SAFE LEGITIMATE SMS
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Result Modal */}
      {showResultModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              {userChoice === scenario.isPhishing ? (
                <div style={{ display: 'inline-flex', padding: '1rem', borderRadius: '50%', background: 'rgba(0, 255, 136, 0.15)', border: '2px solid var(--accent-green)', marginBottom: '0.75rem' }}>
                  <CheckCircle2 size={48} color="var(--accent-green)" />
                </div>
              ) : (
                <div style={{ display: 'inline-flex', padding: '1rem', borderRadius: '50%', background: 'rgba(255, 51, 102, 0.15)', border: '2px solid var(--accent-red)', marginBottom: '0.75rem' }}>
                  <AlertCircle size={48} color="var(--accent-red)" />
                </div>
              )}

              <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>
                {userChoice === scenario.isPhishing ? 'Correct SMS Analysis!' : 'Incorrect Analysis'}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.3rem' }}>
                {scenario.isPhishing ? 'This text message was a SMISHING SCAM.' : 'This text message was LEGITIMATE.'}
              </p>
            </div>

            {/* Red Flags List */}
            {scenario.redFlags.length > 0 && (
              <div style={{ marginBottom: '1.25rem' }}>
                <h4 className="font-mono text-gradient-red" style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                  IDENTIFIED SMISHING RED FLAGS:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {scenario.redFlags.map((flag, idx) => (
                    <div key={idx} style={{ background: 'var(--bg-primary)', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 51, 102, 0.3)', fontSize: '0.85rem' }}>
                      <strong style={{ color: 'var(--accent-amber)' }}>{flag.item}: </strong>
                      <span style={{ color: 'var(--text-secondary)' }}>{flag.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Detailed Explanation */}
            <div style={{ background: 'var(--bg-primary)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', marginBottom: '1.5rem' }}>
              <strong style={{ color: 'var(--accent-amber)', display: 'block', fontSize: '0.85rem', marginBottom: '0.3rem' }}>SMISHING ANALYSIS:</strong>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{scenario.explanation}</p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button className="cyber-btn cyber-btn-primary" onClick={handleNextScenario}>
                Next Scenario <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
