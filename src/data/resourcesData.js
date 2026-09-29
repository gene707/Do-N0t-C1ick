// Cybersecurity Resources & Anti-Phishing Toolkits

export const RESOURCES_DATA = {
  frameworks: [
    {
      title: 'CISA Anti-Phishing Guidance & Technical Guidance',
      organization: 'Cybersecurity and Infrastructure Security Agency (CISA)',
      description: 'Comprehensive government framework for preventing business email compromise, spear phishing, and credential harvesting in organizations.',
      link: 'https://www.cisa.gov/phishing',
      badge: 'Official Standard'
    },
    {
      title: 'NIST Special Publication 800-177: Trustworthy Email',
      organization: 'National Institute of Standards and Technology (NIST)',
      description: 'Technical guidance on deploying SPF, DKIM, DMARC, and S/MIME email signature protocols to eliminate email spoofing.',
      link: 'https://csrc.nist.gov/publications/detail/sp/800-177/rev-1/final',
      badge: 'Technical Spec'
    },
    {
      title: 'APWG (Anti-Phishing Working Group) Reports & Portal',
      organization: 'Anti-Phishing Working Group',
      description: 'Global coalition industry repository tracking domain blacklists, phishing trends, and incident reporting database.',
      link: 'https://apwg.org/',
      badge: 'Global Portal'
    }
  ],
  cheatSheets: [
    {
      id: 'headers-guide',
      title: 'How to Read & Analyze Raw Email Headers',
      steps: [
        'Locate the `Received:` lines from bottom to top to trace the true originating mail server IP address.',
        'Inspect `Received-SPF:` for PASS vs FAIL status to verify if the sending server is authorized by the domain owner.',
        'Check `DKIM-Signature:` and verify `d=` matches the sending domain name in the `From:` header.',
        'Compare `From:` address against `Reply-To:` address. If they point to different domains, exercise extreme caution.',
        'Look for `X-Authentication-Results` header summaries from your mail server provider (Google Workspace / Microsoft 365).'
      ]
    },
    {
      id: 'spotting-phish',
      title: 'The 5 Core Red Flags of Social Engineering',
      steps: [
        'Artificial Urgency: Demands immediate action within tight deadlines (e.g. 15 minutes, before 5 PM).',
        'Authority & Secrecy: Impersonates CEOs or legal counsel demanding strict confidentiality.',
        'Suspicious Hyperlinks: Hover over links without clicking to inspect actual destination domain and parameters.',
        'Generic or Unexpected Greetings: "Dear Valued Customer" or out-of-context attachments (e.g., `.html`, `.iso`, `.exe`, `.zip`).',
        'Bypassing Standard Procedure: Requests wire transfers, credential verification, or gift card purchases outside official ERP systems.'
      ]
    },
    {
      id: 'vishing-smishing-rules',
      title: 'Golden Rules for Vishing & Smishing Defense',
      steps: [
        'Never read out 2FA / OTP passcode numbers over an incoming call or text.',
        'Never trust Caller ID alone—phone numbers are easily spoofed using VOIP internet gateways.',
        'Always hang up and perform an independent callback using official numbers printed on physical cards or corporate intranets.',
        'Do not tap shortened URLs (`bit.ly`, `tinyurl`) in unsolicited SMS text messages.'
      ]
    }
  ],
  reportingPortals: [
    {
      name: 'US-CERT / CISA Incident Reporting',
      details: 'Report active phishing campaigns or corporate security breaches directly to federal cyber teams.',
      url: 'https://www.cisa.gov/report'
    },
    {
      name: 'FTC Report Fraud Portal',
      details: 'Report consumer imposter scams, smishing text fraud, and identity theft.',
      url: 'https://reportfraud.ftc.gov/'
    },
    {
      name: 'Google Safe Browsing & Anti-Phishing Report',
      details: 'Submit malicious phishing web URLs for worldwide browser blocklist inclusion.',
      url: 'https://safebrowsing.google.com/safebrowsing/report_phish/'
    }
  ]
};
