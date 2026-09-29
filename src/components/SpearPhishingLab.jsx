import React, { useState } from 'react';
import { Mail, Search, AlertCircle, CheckCircle2, ShieldAlert, ArrowRight, ExternalLink, FileCode } from 'lucide-react';
import { getLabById } from '../data/labData';

export default function SpearPhishingLab({ onRecordResult }) {
  const lab = getLabById('spear-phishing');
  const [currentScenarioIdx, setCurrentScenarioIdx] = useState(0);
  const [activeView, setActiveView] = useState('body'); // 'body', 'headers', 'redflags'
  const [showResultModal, setShowResultModal] = useState(false);
  const [userChoice, setUserChoice] = useState(null); // true (Phishing), false (Legitimate)

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
    setActiveView('body');
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
          <span className="cyber-badge badge-cyan">{lab.category}</span>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginTop: '0.3rem' }}>{lab.title}</h2>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>{lab.summary}</p>
        </div>
        <div className="font-mono" style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', background: 'var(--bg-secondary)', padding: '0.4rem 0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
          Scenario {currentScenarioIdx + 1} of {lab.scenarios.length}
        </div>
      </div>

      {/* Victim Profile Context */}
      <div className="cyber-card" style={{ background: 'var(--bg-secondary)', borderLeft: '4px solid var(--accent-cyan)' }}>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>TARGET VICTIM ROLE</span>
            <strong style={{ fontSize: '1rem', color: 'var(--text-primary)' }}>{scenario.victimName} ({scenario.victimRole})</strong>
          </div>
          <div style={{ borderLeft: '1px solid var(--border-color)', paddingLeft: '1rem' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>COMPANY</span>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{scenario.company}</span>
          </div>
        </div>
      </div>

      {/* Email Client Mockup */}
      <div className="cyber-card" style={{ padding: 0, overflow: 'hidden' }}>
        {/* Email Top Toolbar */}
        <div style={{ background: 'var(--bg-card-hover)', padding: '0.75rem 1.25rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              onClick={() => setActiveView('body')}
              className="cyber-btn"
              style={{
                fontSize: '0.8rem',
                background: activeView === 'body' ? 'var(--bg-primary)' : 'transparent',
                color: activeView === 'body' ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                border: activeView === 'body' ? '1px solid var(--accent-cyan)' : '1px solid transparent'
              }}
            >
              <Mail size={14} /> Email Message
            </button>
            <button
              onClick={() => setActiveView('headers')}
              className="cyber-btn"
              style={{
                fontSize: '0.8rem',
                background: activeView === 'headers' ? 'var(--bg-primary)' : 'transparent',
                color: activeView === 'headers' ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                border: activeView === 'headers' ? '1px solid var(--accent-cyan)' : '1px solid transparent'
              }}
            >
              <FileCode size={14} /> Raw Email Headers
            </button>
          </div>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            Received: {scenario.timestamp}
          </span>
        </div>

        {/* Email Header Info */}
        <div style={{ padding: '1.25rem', borderBottom: '1px solid var(--border-color)', background: 'rgba(18, 24, 36, 0.5)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '0.5rem 1rem', fontSize: '0.9rem' }}>
            <span style={{ color: 'var(--text-muted)', fontWeight: 600 }}>Subject:</span>
            <strong style={{ color: 'var(--text-primary)', fontSize: '1rem' }}>{scenario.subject}</strong>

            <span style={{ color: 'var(--text-muted)', fontWeight: 600 }}>From:</span>
            <div>
              <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{scenario.senderName} </span>
              <span className="font-mono" style={{ color: 'var(--accent-amber)', fontSize: '0.85rem' }}>&lt;{scenario.senderEmail}&gt;</span>
            </div>

            <span style={{ color: 'var(--text-muted)', fontWeight: 600 }}>To:</span>
            <span style={{ color: 'var(--text-secondary)' }}>{scenario.victimName} &lt;{scenario.displayEmail}&gt;</span>
          </div>
        </div>

        {/* Active Content Panel */}
        <div style={{ padding: '1.5rem', minHeight: '260px' }}>
          {activeView === 'body' && (
            <div style={{ fontSize: '0.95rem', lineHeight: 1.7, whiteSpace: 'pre-wrap', fontFamily: 'sans-serif', color: '#e2e8f0' }}>
              {scenario.bodyText}
            </div>
          )}

          {activeView === 'headers' && (
            <div className="font-mono" style={{ background: '#090d16', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '0.8rem', color: '#38bdf8', overflowX: 'auto' }}>
              {Object.entries(scenario.headers).map(([key, val]) => (
                <div key={key} style={{ marginBottom: '0.4rem' }}>
                  <span style={{ color: '#f472b6', fontWeight: 'bold' }}>{key}:</span> {val}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Decision Action Toolbar */}
        <div style={{ padding: '1.25rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
            What is your security analysis decision?
          </span>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <button
              onClick={() => handleDecision(true)}
              className="cyber-btn cyber-btn-danger"
              style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem' }}
            >
              <ShieldAlert size={18} /> Flag as SPEAR PHISHING
            </button>
            <button
              onClick={() => handleDecision(false)}
              className="cyber-btn cyber-btn-primary"
              style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem', background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' }}
            >
              <CheckCircle2 size={18} /> Mark as SAFE LEGITIMATE
            </button>
          </div>
        </div>
      </div>

      {/* Diagnostic Evaluation Modal */}
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
                {userChoice === scenario.isPhishing ? 'Correct Security Analysis!' : 'Incorrect Analysis'}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.3rem' }}>
                {scenario.isPhishing ? 'This email was a SPEAR PHISHING attack.' : 'This email was LEGITIMATE.'}
              </p>
            </div>

            {/* Red Flags List */}
            {scenario.redFlags.length > 0 && (
              <div style={{ marginBottom: '1.25rem' }}>
                <h4 className="font-mono text-gradient-red" style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                  CRITICAL RED FLAGS IDENTIFIED:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {scenario.redFlags.map((flag, idx) => (
                    <div key={idx} style={{ background: 'var(--bg-primary)', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 51, 102, 0.3)', fontSize: '0.85rem' }}>
                      <strong style={{ color: 'var(--accent-red)' }}>{flag.item}: </strong>
                      <span style={{ color: 'var(--text-secondary)' }}>{flag.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Explanation text */}
            <div style={{ background: 'var(--bg-primary)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', marginBottom: '1.5rem' }}>
              <strong style={{ color: 'var(--accent-cyan)', display: 'block', fontSize: '0.85rem', marginBottom: '0.3rem' }}>DEEP DIVE EXPLANATION:</strong>
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
