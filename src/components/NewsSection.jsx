import React, { useState } from 'react';
import { Newspaper, ShieldAlert, Tag, Calendar, ExternalLink, Filter } from 'lucide-react';
import { PHISHING_NEWS } from '../data/newsData';

export default function NewsSection() {
  const [filterTag, setFilterTag] = useState('ALL');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const tags = ['ALL', 'Vishing', 'Quishing', 'AiTM', 'Homoglyph', 'BEC'];

  const filteredNews = filterTag === 'ALL'
    ? PHISHING_NEWS
    : PHISHING_NEWS.filter(n => n.tags.some(t => t.toLowerCase().includes(filterTag.toLowerCase())));

  const getSeverityBadge = (sev) => {
    if (sev === 'Critical') return <span className="cyber-badge badge-red">CRITICAL</span>;
    if (sev === 'High') return <span className="cyber-badge badge-amber">HIGH SEVERITY</span>;
    return <span className="cyber-badge badge-cyan">MEDIUM SEVERITY</span>;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
      {/* News Header */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
          <Newspaper size={24} color="var(--accent-cyan)" />
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800 }}>Phishing Threat Intelligence & News</h2>
        </div>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          Curated threat feed monitoring emerging cyber attack techniques, zero-day phishing kits, and real-world executive scams.
        </p>
      </div>

      {/* Filter Bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
        <Filter size={16} color="var(--text-muted)" />
        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>Filter by Vector:</span>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setFilterTag(tag)}
            className="cyber-btn"
            style={{
              padding: '0.35rem 0.75rem',
              fontSize: '0.78rem',
              background: filterTag === tag ? 'var(--accent-cyan)' : 'var(--bg-card)',
              color: filterTag === tag ? '#000' : 'var(--text-secondary)',
              border: '1px solid var(--border-color)',
              fontWeight: 600
            }}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* News Articles Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
        {filteredNews.map((article) => (
          <div key={article.id} className="cyber-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                {getSeverityBadge(article.severity)}
                <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <Calendar size={12} /> {article.date}
                </span>
              </div>

              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, lineHeight: 1.4, marginBottom: '0.6rem' }}>
                {article.title}
              </h3>

              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
                {article.summary}
              </p>
            </div>

            <div>
              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                {article.tags.map(t => (
                  <span key={t} style={{ fontSize: '0.7rem', color: 'var(--accent-cyan)', background: 'var(--bg-primary)', padding: '0.15rem 0.5rem', borderRadius: '4px', border: '1px solid var(--border-color)' }}>
                    #{t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedArticle(article)}
                className="cyber-btn cyber-btn-secondary"
                style={{ width: '100%', justifyContent: 'center', fontSize: '0.82rem' }}
              >
                Read Defense Analysis <ExternalLink size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              {getSeverityBadge(selectedArticle.severity)}
              <span className="font-mono" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Source: {selectedArticle.source} • {selectedArticle.date}
              </span>
            </div>

            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.3 }}>
              {selectedArticle.title}
            </h3>

            <div style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.7, whiteSpace: 'pre-wrap', marginBottom: '1.5rem', background: 'var(--bg-primary)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
              {selectedArticle.content}
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button className="cyber-btn cyber-btn-primary" onClick={() => setSelectedArticle(null)}>
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
