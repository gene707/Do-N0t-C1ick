import React, { useState } from 'react';
import { ShieldAlert, History, AlertTriangle, Cpu, Target, Phone, MessageSquare, ExternalLink } from 'lucide-react';

export default function IntroHistory({ onStartLabs }) {
  const [selectedEra, setSelectedEra] = useState('2026');

  const historyTimeline = [
    {
      year: '1995 - 1996',
      title: 'The Origin: AOL Credit Card Harvesting',
      summary: 'The term "phishing" was coined by hackers targeting America Online (AOL) users.',
      detail: 'Adversaries created automated tools (like AOHell) that sent instant messages posing as AOL customer service reps asking users to "verify billing details or account passwords". Hackers used these stolen accounts for free dial-up internet access and trading pirated software.',
      icon: '💾'
    },
    {
      year: '2001 - 2005',
      title: 'Mass E-Commerce & Financial Spoofing',
      summary: 'Phishing shifted from instant messaging to automated mass email spoofing.',
      detail: 'Attackers registered fake domains visually similar to eBay, PayPal, and major retail banks. Spam bots blasted millions of identical emails with subject lines like "Account Suspended: Re-activate immediately!". This marked the rise of credential harvesting web portals.',
      icon: '💳'
    },
    {
      year: '2011',
      title: 'The RSA Breach: Spear Phishing High-Value Targets',
      summary: 'The landmark attack proving targeted emails could breach nation-state defense contractors.',
      detail: 'Attackers sent a carefully targeted email titled "2011 Recruitment Plan" containing a malicious Excel spreadsheet (Flash zero-day) to just 4 employees at RSA Security. The resulting breach compromised SecurID 2FA token seeds worldwide.',
      icon: '🎯'
    },
    {
      year: '2020 - 2023',
      title: 'Smishing Explosion & MFA Push Fatigue',
      summary: 'Shift to mobile text scams and abusing push notification multi-factor authentication.',
      detail: 'Package delivery texts (USPS/FedEx scams) skyrocketed during pandemic online shopping. Attackers also pioneered MFA Push Fatigue (spamming hundreds of login approve notifications until exhausted employees tapped "Approve").',
      icon: '📱'
    },
    {
      year: '2026',
      title: 'AI Deepfake Audio Vishing & Autonomous Agents',
      summary: 'Generative AI models enable zero-latency voice cloning and automated phishing kits.',
      detail: 'Modern phishing utilizes sub-3-second voice samples of corporate executives to perform real-time phone calls (Vishing). Adversary-in-the-Middle (AiTM) proxies dynamically capture 2FA tokens and session cookies without user awareness.',
      icon: '🤖'
    }
  ];

  const coreVectors = [
    {
      title: 'Spear Phishing',
      icon: Target,
      color: 'var(--accent-cyan)',
      desc: 'Highly tailored, personalized phishing emails aimed at specific individuals (CFOs, SysAdmins, HR) using open-source intelligence (OSINT).'
    },
    {
      title: 'Vishing (Voice Phishing)',
      icon: Phone,
      color: 'var(--accent-green)',
      desc: 'Phone calls using caller ID spoofing or AI voice synthesis posing as IT support, bank fraud desks, or law enforcement to extract OTPs or secrets.'
    },
    {
      title: 'Smishing (SMS Phishing)',
      icon: MessageSquare,
      color: 'var(--accent-amber)',
      desc: 'Text messages with malicious shortlinks or fake package delivery notices exploiting mobile trust and small screen real estate.'
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      {/* Hero Banner */}
      <div className="cyber-card" style={{
        background: 'linear-gradient(135deg, rgba(18, 24, 36, 0.95), rgba(10, 13, 20, 0.95))',
        border: '1px solid var(--accent-cyan)',
        boxShadow: '0 0 35px rgba(0, 243, 255, 0.12)',
        padding: '2.5rem 2rem',
        borderRadius: 'var(--radius-lg)'
      }}>
        <div style={{ maxWidth: '800px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }} className="cyber-badge badge-cyan">
            <ShieldAlert size={14} /> CYBERSECURITY EDUCATION PLATFORM
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '1rem' }}>
            Welcome to <span className="text-gradient">Do.Not.Click</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Phishing accounts for over <strong>90% of all organizational cyber breaches</strong> worldwide. 
            This interactive simulator provides safe, sandbox-based training to build muscle memory for identifying 
            header mismatches, voice spoofing, domain homoglyphs, and urgent mobile traps.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button className="cyber-btn cyber-btn-primary" onClick={onStartLabs}>
              <Cpu size={16} /> Enter Interactive Labs
            </button>
            <a href="https://justforphishing.com/" target="_blank" rel="noopener noreferrer" className="cyber-btn cyber-btn-secondary">
              <ExternalLink size={16} /> Reference Inspiration
            </a>
          </div>
        </div>
      </div>

      {/* What is Phishing Section */}
      <div>
        <h3 className="font-mono text-gradient" style={{ fontSize: '1.4rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <ShieldAlert size={20} /> What is Phishing?
        </h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
          Phishing is a form of <strong>social engineering</strong> where attackers impersonate trusted entities—such as 
          banks, executive colleagues, software vendors, or government agencies—to trick victims into divulging sensitive data 
          (passwords, credit card numbers, 2FA codes) or executing unauthorized financial transactions.
        </p>

        {/* 3 Vector Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {coreVectors.map((vec, idx) => {
            const IconComponent = vec.icon;
            return (
              <div key={idx} className="cyber-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem' }}>
                  <div style={{ background: 'var(--bg-primary)', padding: '0.5rem', borderRadius: 'var(--radius-sm)', border: `1px solid ${vec.color}` }}>
                    <IconComponent size={22} color={vec.color} />
                  </div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{vec.title}</h4>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {vec.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Psychological Triggers */}
      <div className="cyber-card" style={{ background: 'rgba(255, 51, 102, 0.05)', borderColor: 'rgba(255, 51, 102, 0.3)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
          <AlertTriangle size={20} color="var(--accent-red)" />
          <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--accent-red)' }}>
            The 4 Psychological Triggers Weaponized in Phishing
          </h4>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
          <div style={{ background: 'var(--bg-primary)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
            <strong style={{ color: 'var(--accent-red)', display: 'block', marginBottom: '0.25rem' }}>1. Urgency & Panic</strong>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>"Account closed in 15 minutes! Wire money before 5 PM!" Forces quick choices without verification.</span>
          </div>
          <div style={{ background: 'var(--bg-primary)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
            <strong style={{ color: 'var(--accent-amber)', display: 'block', marginBottom: '0.25rem' }}>2. Authority & Secrecy</strong>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>Impersonating CEO, IT VP, or IRS agent. Warns "Do NOT tell anyone due to SEC secrecy."</span>
          </div>
          <div style={{ background: 'var(--bg-primary)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
            <strong style={{ color: 'var(--accent-cyan)', display: 'block', marginBottom: '0.25rem' }}>3. Curiosity & Scarcity</strong>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>"Exclusive confidential compensation file attached" or "Package delivery pending fee".</span>
          </div>
          <div style={{ background: 'var(--bg-primary)', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
            <strong style={{ color: 'var(--accent-green)', display: 'block', marginBottom: '0.25rem' }}>4. Fear & Protection</strong>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>"Unauthorized login detected from Moscow! Tap approve to block!" Exploits instinct to fix threats.</span>
          </div>
        </div>
      </div>

      {/* History Timeline */}
      <div>
        <h3 className="font-mono text-gradient" style={{ fontSize: '1.4rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <History size={20} /> Evolution & History of Phishing (1995 - 2026)
        </h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
          Click on any era below to explore how phishing evolved from simple dial-up password theft to AI voice synthesis.
        </p>

        {/* Timeline Navigation Bar */}
        <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.5rem', marginBottom: '1.25rem' }}>
          {historyTimeline.map((item) => (
            <button
              key={item.year}
              onClick={() => setSelectedEra(item.year)}
              className="cyber-btn"
              style={{
                background: selectedEra === item.year ? 'var(--accent-cyan)' : 'var(--bg-card)',
                color: selectedEra === item.year ? '#000' : 'var(--text-primary)',
                border: '1px solid var(--border-color)',
                fontSize: '0.85rem',
                whiteSpace: 'nowrap',
                fontWeight: 700
              }}
            >
              <span>{item.icon}</span>
              <span>{item.year}</span>
            </button>
          ))}
        </div>

        {/* Selected Era Card */}
        {(() => {
          const era = historyTimeline.find(h => h.year === selectedEra) || historyTimeline[0];
          return (
            <div className="cyber-card" style={{ borderLeft: '4px solid var(--accent-cyan)', background: 'var(--bg-secondary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '2rem' }}>{era.icon}</span>
                <div>
                  <span className="cyber-badge badge-cyan">{era.year}</span>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 800, marginTop: '0.2rem' }}>{era.title}</h4>
                </div>
              </div>
              <p style={{ fontSize: '0.95rem', color: 'var(--accent-green)', fontWeight: 600, marginBottom: '0.75rem' }}>
                {era.summary}
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                {era.detail}
              </p>
            </div>
          );
        })()}
      </div>
    </div>
  );
}
