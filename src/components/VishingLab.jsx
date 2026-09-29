import React, { useState } from 'react';
import { PhoneCall, PhoneOff, Volume2, Mic, AlertTriangle, CheckCircle2, AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { getLabById } from '../data/labData';

export default function VishingLab({ onRecordResult }) {
  const lab = getLabById('vishing');
  const [currentScenarioIdx, setCurrentScenarioIdx] = useState(0);
  const [isCalling, setIsCalling] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const scenario = lab.scenarios[currentScenarioIdx];

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setShowResultModal(true);
    if (onRecordResult) {
      onRecordResult(lab.id, option.correct, option.correct ? 100 : 0);
    }
  };

  const handleNextScenario = () => {
    setShowResultModal(false);
    setSelectedOption(null);
    setIsCalling(false);
    if (currentScenarioIdx < lab.scenarios.length - 1) {
      setCurrentScenarioIdx(prev => prev + 1);
    } else {
      setCurrentScenarioIdx(0);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Lab Title */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <span className="cyber-badge badge-green">{lab.category}</span>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginTop: '0.3rem' }}>{lab.title}</h2>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>{lab.summary}</p>
        </div>
        <div className="font-mono" style={{ fontSize: '0.85rem', color: 'var(--accent-green)', background: 'var(--bg-secondary)', padding: '0.4rem 0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
          Scenario {currentScenarioIdx + 1} of {lab.scenarios.length}
        </div>
      </div>

      {/* Voice Call Console */}
      <div className="cyber-card" style={{ background: 'linear-gradient(135deg, rgba(18, 24, 36, 0.95), #090d16)', border: '1px solid var(--accent-green-glow)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1.5rem 1rem', textAlign: 'center' }}>
          
          {/* Animated Call Avatar */}
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: isCalling ? 'rgba(0, 255, 136, 0.2)' : 'rgba(255, 51, 102, 0.2)',
            border: `2px solid ${isCalling ? 'var(--accent-green)' : 'var(--accent-red)'}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1rem',
            boxShadow: isCalling ? '0 0 25px rgba(0, 255, 136, 0.4)' : 'none'
          }}>
            <PhoneCall size={38} color={isCalling ? 'var(--accent-green)' : 'var(--accent-red)'} />
          </div>

          {/* Caller Identification */}
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>{scenario.callerName}</h3>
          <div className="font-mono" style={{ display: 'flex', gap: '0.75rem', marginTop: '0.4rem', fontSize: '0.85rem' }}>
            <span style={{ color: 'var(--accent-cyan)' }}>Displayed Spoofed No: {scenario.spoofedNumber}</span>
            <span style={{ color: 'var(--accent-red)' }}>Actual Gateway: {scenario.actualNumber}</span>
          </div>

          {/* Audio Waveform Simulator */}
          <div style={{ margin: '1.5rem 0', width: '100%', maxWidth: '350px', background: 'var(--bg-primary)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span className="cyber-badge badge-green" style={{ fontSize: '0.7rem' }}>
                <Volume2 size={12} /> {isCalling ? 'VOICE CALL ACTIVE' : 'CALL STANDBY'}
              </span>
              <button
                onClick={() => setIsCalling(!isCalling)}
                className="cyber-btn cyber-btn-secondary"
                style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem' }}
              >
                {isCalling ? 'Pause Audio' : 'Play Audio Stream'}
              </button>
            </div>

            {isCalling ? (
              <div className="waveform-container" style={{ justifyContent: 'center' }}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
            ) : (
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', italic: true }}>Click "Play Audio Stream" to simulate call audio.</p>
            )}
          </div>

          {/* Transcript Box */}
          <div style={{ width: '100%', maxWidth: '700px', background: '#090d16', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem', textAlign: 'left', marginBottom: '1.5rem' }}>
            <h4 className="font-mono" style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
              REAL-TIME AUDIO TRANSCRIPT:
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {scenario.audioTranscript.map((line, idx) => (
                <div key={idx} style={{ background: 'var(--bg-card)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--accent-cyan)' }}>
                  <strong className="font-mono" style={{ color: 'var(--accent-cyan)', fontSize: '0.85rem', display: 'block', marginBottom: '0.2rem' }}>
                    {line.speaker}:
                  </strong>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>"{line.text}"</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Choice Buttons */}
          <div style={{ width: '100%', maxWidth: '700px', textAlign: 'left' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
              How do you respond to this call request?
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {scenario.verificationOptions.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(opt)}
                  className="cyber-btn cyber-btn-secondary"
                  style={{
                    width: '100%',
                    justifyContent: 'flex-start',
                    textAlign: 'left',
                    padding: '0.9rem 1.25rem',
                    fontSize: '0.9rem',
                    lineHeight: 1.4
                  }}
                >
                  <span className="font-mono" style={{ color: 'var(--accent-cyan)', marginRight: '0.5rem' }}>[{idx + 1}]</span>
                  {opt.text}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Result Modal */}
      {showResultModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              {selectedOption.correct ? (
                <div style={{ display: 'inline-flex', padding: '1rem', borderRadius: '50%', background: 'rgba(0, 255, 136, 0.15)', border: '2px solid var(--accent-green)', marginBottom: '0.75rem' }}>
                  <CheckCircle2 size={48} color="var(--accent-green)" />
                </div>
              ) : (
                <div style={{ display: 'inline-flex', padding: '1rem', borderRadius: '50%', background: 'rgba(255, 51, 102, 0.15)', border: '2px solid var(--accent-red)', marginBottom: '0.75rem' }}>
                  <AlertCircle size={48} color="var(--accent-red)" />
                </div>
              )}

              <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>
                {selectedOption.correct ? 'Excellent Defense Protocol!' : 'High Risk Response Selected!'}
              </h3>
              <p style={{ color: selectedOption.correct ? 'var(--accent-green)' : 'var(--accent-red)', fontSize: '0.95rem', marginTop: '0.3rem', fontWeight: 600 }}>
                {selectedOption.risk}
              </p>
            </div>

            {/* Red Flags Breakdown */}
            <div style={{ marginBottom: '1.25rem' }}>
              <h4 className="font-mono text-gradient" style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                VISHING RED FLAGS IN THIS CALL:
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {scenario.redFlags.map((flag, idx) => (
                  <div key={idx} style={{ background: 'var(--bg-primary)', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', fontSize: '0.85rem' }}>
                    <strong style={{ color: 'var(--accent-amber)' }}>{flag.item}: </strong>
                    <span style={{ color: 'var(--text-secondary)' }}>{flag.description}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Explanation */}
            <div style={{ background: 'var(--bg-primary)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', marginBottom: '1.5rem' }}>
              <strong style={{ color: 'var(--accent-green)', display: 'block', fontSize: '0.85rem', marginBottom: '0.3rem' }}>VISHING TACTIC SUMMARY:</strong>
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
