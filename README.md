# 🚨 Do.Not.Click - Phishing Awareness Simulator

**Do.Not.Click** is a comprehensive, interactive cybersecurity awareness training simulator designed to build practical muscle memory for detecting phishing attacks without real-world risk.

Inspired by open-source security training platforms (like *Just For Phishing*), **Do.Not.Click** provides two distinct versions:
1. **Web GUI Version** (accessible via browser URL, auto-creates Guest ID with zero login required)
2. **Terminal (CLI) Version** (runs colorized in shell using Node.js or Python)

---

## 🌟 Key Features

### 1. Auto Guest Session System
- **No registration or login needed.**
- Automatically assigns a unique `GUEST-XXXX` profile stored in browser `localStorage`.
- Retains points, solved labs count, and unlocked badges (`Phish Hunter I`, `Voice Defender`, `Anti-Phishing Specialist`).

### 2. Comprehensive Educational Modules
- **What is Phishing?**: In-depth breakdown of social engineering concepts.
- **The 4 Psychological Triggers**: Urgency, Fear/Protection, Authority/Secrecy, Curiosity/Scarcity.
- **Interactive History Timeline (1995 - 2026)**: Trace phishing from AOL dial-up theft to modern AI voice deepfakes.

### 3. 3 Interactive Hands-on Labs
- 📧 **Lab 01: Spear Phishing (Targeted Email Analysis)**
  - Targeted executive role context.
  - Raw email header inspector (`Received-SPF`, `DKIM-Signature`, `Reply-To` mismatch).
  - Typosquatting & visual homoglyph detector (e.g. `apex-globa1-logistics.com`).
- 📞 **Lab 02: Vishing (Voice Phishing)**
  - Audio waveform player visualizer & caller ID spoofer detector.
  - Interactive call decision tree (Defends against MFA Push Fatigue & false IT callers).
- 📱 **Lab 03: Smishing (SMS Phishing)**
  - Smartphone GUI mockup.
  - URL expander / redirect unshortener tool & domain WHOIS inspector.

### 4. Phishing Threat News & Intelligence
- Curated threat feed monitoring AI voice scams, QR code Quishing, and Adversary-in-the-Middle (AiTM) MFA bypasses.

### 5. Cybersecurity Resources & Defense Hub
- Official CISA, NIST SP 800-177, and APWG standards.
- Step-by-step raw email header reading cheat sheet.
- Direct links to FTC and CISA incident reporting portals.

---

## 🚀 How to Run

### Version A: Web GUI Version (Vite + React)
```bash
# Install dependencies
npm install

# Start local development web server
npm run dev
```
Open your browser at `http://localhost:3000` (or port shown in terminal). No login required!

### Version B: Terminal (CLI) Version

#### Option 1: Node.js (Zero NPM Dependencies)
```bash
node cli/do_not_click.js
# OR
npm run cli
```

#### Option 2: Python 3 (Zero Pip Dependencies)
```bash
python cli/do_not_click.py
```

---

## 🧩 Modular Lab Architecture (Extensible)

To register a new lab in the future (e.g., *Lab 04: Quishing / QR Code Scams* or *Lab 05: MFA Push Fatigue*):
1. Open `src/data/labData.js`.
2. Append a new lab object to the `AVAILABLE_LABS` array.
3. The UI automatically registers the lab, renders its switcher tab, and calculates scores!
