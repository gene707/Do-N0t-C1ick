// Modular Lab Registry Data for Do.Not.Click Phishing Simulator
// Easy to extend with new lab modules by adding entries to `AVAILABLE_LABS` array!

export const AVAILABLE_LABS = [
  {
    id: 'spear-phishing',
    title: 'Lab 01: Spear Phishing',
    category: 'Targeted Email Analysis',
    difficulty: 'Intermediate',
    icon: 'Mail',
    summary: 'Analyze high-value targeted emails directed at key organizational roles. Inspect headers, spoofed domains, and subtle urgency triggers.',
    scenarios: [
      {
        id: 'spear-1',
        victimRole: 'Chief Financial Officer (CFO)',
        victimName: 'Sarah Jenkins',
        company: 'Apex Global Logistics',
        senderName: 'David Sterling (CEO)',
        senderEmail: 'd.sterling@apex-globa1-logistics.com', // Spoofed '1' instead of 'l'
        displayEmail: 'd.sterling@apex-global-logistics.com',
        subject: 'URGENT: Confidential Acquisition Wire Transfer Needed Before 5 PM',
        timestamp: 'Today, 4:12 PM (48 mins before bank cutoff)',
        bodyText: `Sarah,\n\nI am currently in closed-door M&A negotiations for the secret acquisition of Vanguard Systems. We need to secure the initial earnest deposit of $245,000 immediately to avoid losing the deal to a competitor.\n\nPlease process an expedited wire transfer using the bank details in the attached routing doc:\nhttps://secure-wire.apex-globa1-logistics.com/routing-doc.pdf\n\nDo NOT speak to anyone else about this, including the board or finance team, as we are under strict SEC non-disclosure. Confirm once completed.\n\nBest regards,\nDavid Sterling\nCEO, Apex Global Logistics`,
        headers: {
          'From': 'David Sterling <d.sterling@apex-globa1-logistics.com>',
          'To': 'Sarah Jenkins <s.jenkins@apex-global-logistics.com>',
          'Date': 'Tue, 29 Sep 2026 16:12:04 -0400',
          'Subject': 'URGENT: Confidential Acquisition Wire Transfer Needed Before 5 PM',
          'Reply-To': 'd.sterling.exec.mail@mail-temp-gateway.net',
          'Return-Path': '<bounce@mail-temp-gateway.net>',
          'Received-SPF': 'FAIL (domain apex-globa1-logistics.com does not designate 185.220.101.5 as permitted sender)',
          'DKIM-Signature': 'v=1; a=rsa-sha256; d=mail-temp-gateway.net; s=selector1;',
          'X-Authentication-Results': 'spf=fail; dkim=neutral; dmarc=fail'
        },
        redFlags: [
          { item: 'Sender Domain', description: 'Typosquatting domain: `apex-globa1-logistics.com` uses digit "1" instead of lowercase "l".' },
          { item: 'Reply-To Header', description: 'Differs from sender! Replies route to external server `mail-temp-gateway.net`.' },
          { item: 'SPF & DKIM Mismatch', description: 'Received-SPF failed; DKIM signed by an unrelated domain.' },
          { item: 'High Urgency & Secrecy', description: 'Requests bypass of standard dual-authorization protocols under time pressure.' }
        ],
        isPhishing: true,
        explanation: 'This is a classic Business Email Compromise (BEC) / CEO Fraud spear phishing attack. The attacker spoofed the domain using a visual homoglyph ("globa1" with a number 1) and included a Reply-To header pointing to an external drop box.'
      },
      {
        id: 'spear-2',
        victimRole: 'Senior Software Engineer',
        victimName: 'Alex Mercer',
        company: 'CloudScale Tech',
        senderName: 'GitHub Enterprise Security',
        senderEmail: 'noreply@github.com',
        displayEmail: 'noreply@github.com',
        subject: '[SECURITY ALERT] Personal Access Token auto-revoked for repo `cloudscale/core-api`',
        timestamp: 'Today, 11:05 AM',
        bodyText: `Hi @alex-mercer,\n\nA personal access token (PAT) associated with your account was identified in a public commit on a third-party fork.\n\nTo safeguard your repositories, the token has been automatically invalidated.\n\nYou can review token audit logs and manage active credentials in your security settings:\nhttps://github.com/settings/tokens\n\nIf you did not make this commit, please review your account activity log immediately.\n\nThanks,\nThe GitHub Security Team`,
        headers: {
          'From': 'GitHub <noreply@github.com>',
          'To': 'Alex Mercer <alex@cloudscale.io>',
          'Date': 'Tue, 29 Sep 2026 11:05:12 +0000',
          'Subject': '[SECURITY ALERT] Personal Access Token auto-revoked for repo `cloudscale/core-api` ',
          'Reply-To': 'noreply@github.com',
          'Return-Path': '<bounces+128491@github.com>',
          'Received-SPF': 'PASS (google.com: domain of bounces+128491@github.com designates 192.30.252.203 as permitted sender)',
          'DKIM-Signature': 'v=1; a=rsa-sha256; d=github.com; s=pf2014;',
          'X-Authentication-Results': 'spf=pass; dkim=pass; dmarc=pass'
        },
        redFlags: [],
        isPhishing: false,
        explanation: 'This is a LEGITIMATE transactional notification from GitHub. All SPF, DKIM, DMARC headers pass, the domain is github.com, and the destination URL links directly to the official `github.com` settings domain without redirects.'
      }
    ]
  },
  {
    id: 'vishing',
    title: 'Lab 02: Vishing (Voice Phishing)',
    category: 'Interactive Audio & Call Analysis',
    difficulty: 'Advanced',
    icon: 'PhoneCall',
    summary: 'Analyze simulated voice calls from attackers posing as IT Helpdesk, Bank Fraud Departments, or Executive Assistants using AI Voice Synthesis.',
    scenarios: [
      {
        id: 'vish-1',
        callerName: 'IT Helpdesk - Security Ops',
        spoofedNumber: '+1 (800) 555-0199',
        actualNumber: '+44 7700 900077 (UK VOIP Proxy)',
        callType: 'Inbound Urgent Voice Call',
        audioTranscript: [
          { speaker: 'Caller (Mark)', text: "Hello Sarah, this is Mark from corporate IT Security. We've detected an unauthorized login attempt from Moscow on your VPN account right now." },
          { speaker: 'Target (You)', text: "Oh no! Really? What do I need to do?" },
          { speaker: 'Caller (Mark)', text: "I am pushing a verification prompt to your Microsoft Authenticator app right now. Please tap 'Approve' and read me the 2-digit verification code displayed on your screen to block the intruder." }
        ],
        verificationOptions: [
          { text: "Approve the push prompt immediately and read the 2-digit code over the phone", correct: false, risk: "High Risk! You just authorized an MFA Push Fatigue attack." },
          { text: "Refuse to share MFA code, hang up, and call official IT Helpdesk at internal extension #4357", correct: true, risk: "Safe Action! Verified internal channels." },
          { text: "Ask the caller to tell you your employee ID number before providing the code", correct: false, risk: "Medium Risk. Attackers often harvest employee IDs via LinkedIn OSINT." }
        ],
        redFlags: [
          { item: 'MFA Push Code Request', description: 'Legitimate IT support will NEVER ask you to read or approve an MFA push code over the phone.' },
          { item: 'Unsolicited Inbound Call', description: 'Caller initialized call creating artificial panic without prior ticket creation.' },
          { item: 'Caller ID Spoofing', description: 'Display number (+1 800) spoofed official company line while incoming trunk originates from UK VOIP proxy.' }
        ],
        explanation: 'This scenario simulates an MFA Push Fatigue / Vishing Hybrid attack (similar to the Uber and MGM breaches). Attackers trigger real push notifications and call the user pretending to be IT to trick them into approving.'
      },
      {
        id: 'vish-2',
        callerName: 'First National Bank Fraud Desk',
        spoofedNumber: '1-888-555-BANK',
        actualNumber: 'VOIP-ANONYMOUS-SIP',
        callType: 'Automated AI Voice Assistant',
        audioTranscript: [
          { speaker: 'AI Automated Voice', text: "Security alert from First National Bank. A pending debit of $1,890.00 to Apple Store Online was attempted on your card ending in 4092." },
          { speaker: 'AI Automated Voice', text: "If you did NOT authorize this transaction, press 1 now to connect with a Senior Fraud Specialist." },
          { speaker: 'Fraud Specialist (Fake)', text: "Thank you for connecting. To cancel this pending fraudulent charge, I need to verify your full 16-digit debit card number and 3-digit CVV on the back." }
        ],
        verificationOptions: [
          { text: "Provide card number and CVV so the agent can cancel the pending $1,890 transaction", correct: false, risk: "High Risk! Card credentials stolen." },
          { text: "Hang up immediately and call the customer service number printed directly on the back of your physical card", correct: true, risk: "Safe Action! Prevents card harvesting." }
        ],
        redFlags: [
          { item: 'CVV & Card Number Request', description: 'Banks never call asking for your 3-digit CVV or full PIN over the phone.' },
          { item: 'Press 1 Panic Trap', description: 'Interactive voice response (IVR) designed to create immediate financial panic.' }
        ],
        explanation: 'Automated Vishing bots use robo-dialers to screen victims. Once the victim presses 1 out of panic, they are transferred to a scam operator harvesting financial credentials.'
      }
    ]
  },
  {
    id: 'smishing',
    title: 'Lab 03: Smishing (SMS Phishing)',
    category: 'Mobile Text & Shortcode Analysis',
    difficulty: 'Beginner - Intermediate',
    icon: 'Smartphone',
    summary: 'Inspect suspicious mobile text messages, shortened URLs, package delivery traps, and fake bank notifications on a simulated smartphone interface.',
    scenarios: [
      {
        id: 'smish-1',
        senderID: 'USPS-Express-Notice',
        phoneNumber: '+1 (415) 890-3412',
        time: '14:22',
        message: 'USPS: Your package #US-9402-881 cannot be delivered due to incomplete address details. Please update your address within 12 hours or item will be returned to sender: https://usps-redelivery-portal-update.com/tracking',
        linkUrl: 'https://usps-redelivery-portal-update.com/tracking',
        expandedUrl: 'https://usps-redelivery-portal-update.com/login?redirect=credit-card-fee-0.50',
        domainOwner: 'Registrant: Hidden (Privacy Protection, Russia/Offshore Registrar)',
        redFlags: [
          { item: 'Non-Official Domain', description: 'Official domain is `usps.com`. Domain `usps-redelivery-portal-update.com` is a fake phishing domain registered 2 days ago.' },
          { item: 'Sensational Urgency', description: 'Threatens item return within 12 hours to force impulsive action.' },
          { item: 'Unsolicited Tracking Text', description: 'Sent from an individual 10-digit mobile number instead of an official 5 or 6 digit shortcode.' }
        ],
        isPhishing: true,
        explanation: 'Package delivery smishing is one of the most widespread scams globally. The link steals credit card numbers under the guise of paying a "$0.50 redelivery fee".'
      },
      {
        id: 'smish-2',
        senderID: '223-95',
        phoneNumber: '223-95 (Verified Shortcode)',
        time: '09:40',
        message: 'Your Chase online banking passcode is 849201. Do NOT share this code with anyone. Chase will never call or text to ask for this code.',
        linkUrl: null,
        expandedUrl: null,
        domainOwner: 'JPMorgan Chase & Co.',
        redFlags: [],
        isPhishing: false,
        explanation: 'This is a LEGITIMATE 2FA text message from Chase Bank. It comes from a registered shortcode, contains no links, and explicitly warns the user never to share the code.'
      }
    ]
  }
];

// Helper to get lab by ID
export const getLabById = (id) => AVAILABLE_LABS.find(l => l.id === id);
