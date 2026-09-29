import React, { useState } from 'react';
import { FolderGit2, ShieldCheck, FileText, ExternalLink, ChevronRight, Bookmark } from 'lucide-react';
import { RESOURCES_DATA } from '../data/resourcesData';

export default function ResourcesSection() {
  const [activeTab, setActiveTab] = useState('cheatSheets'); // 'cheatSheets', 'frameworks', 'reporting'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
      {/* Header */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
          <FolderGit2 size={24} color="var(--accent-green)" />
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800 }}>Anti-Phishing Resources & Defense Hub</h2>
        </div>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          Curated guides, official government frameworks, header inspection cheat sheets, and incident reporting portals.
        </p>
      </div>

      {/* Resource Category Navigation */}
      <div style={{ display: 'flex', gap: '0.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
        <button
          onClick={() => setActiveTab('cheatSheets')}
          className="cyber-btn"
          style={{
            background: activeTab === 'cheatSheets' ? 'var(--bg-card-hover)' : 'transparent',
            color: activeTab === 'cheatSheets' ? 'var(--accent-cyan)' : 'var(--text-secondary)',
            border: activeTab === 'cheatSheets' ? '1px solid var(--accent-cyan)' : '1px solid transparent'
          }}
        >
          <FileText size={16} /> Defense Cheat Sheets
        </button>
        <button
          onClick={() => setActiveTab('frameworks')}
          className="cyber-btn"
          style={{
            background: activeTab === 'frameworks' ? 'var(--bg-card-hover)' : 'transparent',
            color: activeTab === 'frameworks' ? 'var(--accent-green)' : 'var(--text-secondary)',
            border: activeTab === 'frameworks' ? '1px solid var(--accent-green)' : '1px solid transparent'
          }}
        >
          <ShieldCheck size={16} /> Official Standards & Spec
        </button>
        <button
          onClick={() => setActiveTab('reporting')}
          className="cyber-btn"
          style={{
            background: activeTab === 'reporting' ? 'var(--bg-card-hover)' : 'transparent',
            color: activeTab === 'reporting' ? 'var(--accent-red)' : 'var(--text-secondary)',
            border: activeTab === 'reporting' ? '1px solid var(--accent-red)' : '1px solid transparent'
          }}
        >
          <Bookmark size={16} /> Incident Reporting Portals
        </button>
      </div>

      {/* Cheat Sheets Content */}
      {activeTab === 'cheatSheets' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {RESOURCES_DATA.cheatSheets.map((cs) => (
            <div key={cs.id} className="cyber-card" style={{ borderLeft: '4px solid var(--accent-cyan)' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--accent-cyan)' }}>
                {cs.title}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {cs.steps.map((step, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <ChevronRight size={16} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Frameworks Content */}
      {activeTab === 'frameworks' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
          {RESOURCES_DATA.frameworks.map((fw, idx) => (
            <div key={idx} className="cyber-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span className="cyber-badge badge-green" style={{ marginBottom: '0.5rem' }}>{fw.badge}</span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginTop: '0.4rem', marginBottom: '0.4rem' }}>{fw.title}</h3>
                <span className="font-mono" style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.75rem' }}>
                  {fw.organization}
                </span>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {fw.description}
                </p>
              </div>

              <a href={fw.link} target="_blank" rel="noopener noreferrer" className="cyber-btn cyber-btn-secondary" style={{ justifyContent: 'center', fontSize: '0.82rem' }}>
                Access Official Documentation <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      )}

      {/* Reporting Portals Content */}
      {activeTab === 'reporting' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
          {RESOURCES_DATA.reportingPortals.map((rp, idx) => (
            <div key={idx} className="cyber-card" style={{ borderLeft: '4px solid var(--accent-red)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.4rem' }}>{rp.name}</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                {rp.details}
              </p>
              <a href={rp.url} target="_blank" rel="noopener noreferrer" className="cyber-btn cyber-btn-danger" style={{ fontSize: '0.82rem' }}>
                Submit Phishing Report <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
