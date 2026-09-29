import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import GuestProfile from './components/GuestProfile';
import IntroHistory from './components/IntroHistory';
import SpearPhishingLab from './components/SpearPhishingLab';
import VishingLab from './components/VishingLab';
import SmishingLab from './components/SmishingLab';
import NewsSection from './components/NewsSection';
import ResourcesSection from './components/ResourcesSection';
import { AVAILABLE_LABS } from './data/labData';
import { Mail, PhoneCall, Smartphone, Shield, ArrowRight } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('intro'); // 'intro', 'labs', 'news', 'resources'
  const [activeLabId, setActiveLabId] = useState('spear-phishing');
  const [guestSession, setGuestSession] = useState({
    guestId: 'GUEST-8492',
    score: 0,
    completedLabs: {}
  });

  // Auto-create Guest ID on initial web page load (No login required!)
  useEffect(() => {
    const savedSession = localStorage.getItem('do_not_click_guest');
    if (savedSession) {
      try {
        setGuestSession(JSON.parse(savedSession));
      } catch (e) {
        initNewGuest();
      }
    } else {
      initNewGuest();
    }
  }, []);

  const initNewGuest = () => {
    const randomId = 'GUEST-' + Math.floor(1000 + Math.random() * 9000);
    const newSession = {
      guestId: randomId,
      score: 0,
      completedLabs: {}
    };
    setGuestSession(newSession);
    localStorage.setItem('do_not_click_guest', JSON.stringify(newSession));
  };

  const resetGuestSession = () => {
    initNewGuest();
  };

  const handleRecordResult = (labId, isCorrect, points) => {
    if (!isCorrect) return;
    setGuestSession(prev => {
      if (prev.completedLabs[labId]) return prev; // already recorded
      const updated = {
        ...prev,
        score: prev.score + points,
        completedLabs: {
          ...prev.completedLabs,
          [labId]: true
        }
      };
      localStorage.setItem('do_not_click_guest', JSON.stringify(updated));
      return updated;
    });
  };

  // Lab Component Mapping Engine
  const renderLabComponent = () => {
    switch (activeLabId) {
      case 'spear-phishing':
        return <SpearPhishingLab onRecordResult={handleRecordResult} />;
      case 'vishing':
        return <VishingLab onRecordResult={handleRecordResult} />;
      case 'smishing':
        return <SmishingLab onRecordResult={handleRecordResult} />;
      default:
        return <SpearPhishingLab onRecordResult={handleRecordResult} />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} guestSession={guestSession} />

      <main style={{ flex: 1, maxWidth: '1200px', width: '100%', margin: '0 auto', padding: '2rem 1.5rem' }}>
        {/* Guest Profile Banner */}
        <GuestProfile guestSession={guestSession} resetGuestSession={resetGuestSession} />

        {/* Tab 1: Overview & History */}
        {activeTab === 'intro' && (
          <IntroHistory onStartLabs={() => setActiveTab('labs')} />
        )}

        {/* Tab 2: Interactive Labs */}
        {activeTab === 'labs' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Lab Switcher Bar */}
            <div className="cyber-card" style={{ padding: '1rem', background: 'var(--bg-secondary)' }}>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>
                SELECT PHISHING LAB MODULE:
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem' }}>
                {AVAILABLE_LABS.map((lab) => {
                  const isActive = activeLabId === lab.id;
                  const isDone = !!guestSession.completedLabs[lab.id];
                  return (
                    <button
                      key={lab.id}
                      onClick={() => setActiveLabId(lab.id)}
                      className="cyber-btn"
                      style={{
                        background: isActive ? 'var(--bg-card-hover)' : 'var(--bg-primary)',
                        border: isActive ? '1px solid var(--accent-cyan)' : '1px solid var(--border-color)',
                        color: isActive ? 'var(--accent-cyan)' : 'var(--text-primary)',
                        justifyContent: 'space-between',
                        padding: '0.85rem 1rem',
                        fontSize: '0.85rem'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span>{lab.id === 'spear-phishing' ? '📧' : lab.id === 'vishing' ? '📞' : '📱'}</span>
                        <span style={{ fontWeight: 700 }}>{lab.title}</span>
                      </div>
                      {isDone && <span className="cyber-badge badge-green">SOLVED</span>}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Lab Component */}
            {renderLabComponent()}
          </div>
        )}

        {/* Tab 3: Threat News */}
        {activeTab === 'news' && <NewsSection />}

        {/* Tab 4: Resources */}
        {activeTab === 'resources' && <ResourcesSection />}
      </main>

      {/* Footer */}
      <footer style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', padding: '1.5rem 0', textAlign: 'center', marginTop: '3rem' }}>
        <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
          Do.Not.Click Phishing Simulator • Built for Educational & Security Awareness Purpose • No Credentials Harvested
        </p>
      </footer>
    </div>
  );
}
