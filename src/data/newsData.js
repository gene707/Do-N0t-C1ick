// Curated Phishing Threat News Feed for Do.Not.Click

export const PHISHING_NEWS = [
  {
    id: 'news-1',
    title: 'Rise of AI Deepfake Voice Scams (Vishing 2.0) Targets Corporate Executives',
    date: 'September 24, 2026',
    category: 'Vishing & AI Threat',
    source: 'Cyber Defense Weekly',
    summary: 'Attackers are utilizing sub-3-second voice cloning samples harvested from public webinars to impersonate CEOs on phone calls and authorize emergency wire transfers.',
    content: `Security researchers have warned of a 300% surge in AI-generated voice phishing attacks targeting finance departments globally. Using short audio snippets scraped from YouTube, earnings calls, or podcasts, adversaries replicate executive voices with uncanny emotional nuance.

Key Defense Takeaways:
- Establish out-of-band secondary confirmation channels for high-value financial requests.
- Implement verbal 'passwords' or challenge-response verification for executive voice requests.`,
    severity: 'High',
    tags: ['AI Deepfake', 'Vishing', 'BEC', 'Executive Spoofing']
  },
  {
    id: 'news-2',
    title: 'Quishing Escalation: Malicious QR Codes Placed on Public Parking Meters',
    date: 'September 18, 2026',
    category: 'QR Code Phishing',
    source: 'Global Threat Intel',
    summary: 'Physical parking meters across major metropolitan cities were targeted with physical stickers overlaying legitimate payment QR codes, redirecting drivers to credit card harvesting sites.',
    content: `Attackers leverage QR codes because traditional email filters cannot inspect physical URLs before a user scans them on a mobile device. Mobile browsers often lack robust web filter extensions, leaving users vulnerable.

Key Defense Takeaways:
- Always check physical QR stickers for tampering or overlay labels on public infrastructure.
- Preview the full URL before tapping 'Open Link' on your smartphone scanner app.`,
    severity: 'Medium',
    tags: ['Quishing', 'QR Scam', 'Mobile Security', 'Physical Vector']
  },
  {
    id: 'news-3',
    title: 'MFA Push Fatigue & Session Hijacking: The New Frontier Beyond Passwords',
    date: 'August 30, 2026',
    category: 'Authentication Bypasses',
    source: 'Infosec Horizon',
    summary: 'With 2FA adoption rising, threat actors have shifted from password theft to Adversary-in-the-Middle (AiTM) proxy toolkits (e.g. Evilginx3) that capture session cookies in real time.',
    content: `Modern phishing kits no longer just steal credentials; they proxy traffic directly to legitimate login portals (like Microsoft 365 or Okta) to capture live session tokens, effectively bypassing traditional 2FA.

Key Defense Takeaways:
- Enforce FIDO2 / Passkey WebAuthn hardware keys, which are cryptographically bound to the domain and immune to AiTM phishing.
- Disable standard SMS and push prompt fallback options where high-security assurance is required.`,
    severity: 'Critical',
    tags: ['AiTM', 'MFA Fatigue', 'Session Hijacking', 'FIDO2']
  },
  {
    id: 'news-4',
    title: 'Typosquatting & IDN Homograph Attacks Exploit Unicode Characters',
    date: 'August 12, 2026',
    category: 'Domain Spoofing',
    source: 'Domain Threat Monitor',
    summary: 'Cybercriminals register internationalized domain names (IDN) using Cyrillic characters that look visually identical to Latin letters (e.g. Cyrillic "а" vs Latin "a").',
    content: `Homograph attacks trick human eyes by taking advantage of identical character glyphs across language alphabets. Browser address bars display "xn--..." (Punycode) when rendering suspicious IDNs, but many users don't notice the subtle shift.

Key Defense Takeaways:
- Configure enterprise DNS resolvers to block Punycode / IDN resolutions for internal corporate brand lookalikes.
- Use password managers that automatically match exact stored URLs rather than relying on visual domain checking.`,
    severity: 'Medium',
    tags: ['Homoglyph', 'Typosquatting', 'DNS', 'Domain Spoofing']
  }
];
