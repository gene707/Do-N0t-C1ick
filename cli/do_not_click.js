#!/usr/bin/env node
/**
 * Do.Not.Click - Phishing Awareness Simulator (CLI Version)
 * Zero external NPM dependencies! Runs natively in any Node environment.
 */

const readline = require('readline');

// ANSI Color Formatting
const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  dim: "\x1b[2m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
  bgDark: "\x1b[40m"
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const guestId = 'GUEST-CLI-' + Math.floor(1000 + Math.random() * 9000);
let score = 0;

function clearScreen() {
  console.clear();
}

function printBanner() {
  console.log(`${colors.cyan}${colors.bright}`);
  console.log(`====================================================================`);
  console.log(`  🚨 DO.NOT.CLICK - PHISHING AWARENESS SIMULATOR v1.0 [CLI BUILD] 🚨`);
  console.log(`====================================================================${colors.reset}`);
  console.log(`${colors.green}Auto-Guest ID: ${colors.bright}${guestId}${colors.reset} | ${colors.yellow}Score: ${score} PTS${colors.reset}`);
  console.log(`${colors.dim}Educational Security Sandbox - No Credentials Stolen${colors.reset}\n`);
}

function askQuestion(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function mainMenu() {
  clearScreen();
  printBanner();

  console.log(`${colors.cyan}${colors.bright}MAIN MENU:${colors.reset}`);
  console.log(`  [1] 📖 What is Phishing & History Timeline (1995 - 2026)`);
  console.log(`  [2] 🎯 Lab 01: Spear Phishing (Email Header & Typosquatting)`);
  console.log(`  [3] 📞 Lab 02: Vishing (Voice Phishing & MFA Defense)`);
  console.log(`  [4] 📱 Lab 03: Smishing (SMS Phishing & URL Expander)`);
  console.log(`  [5] 📰 Threat Intelligence & News Feed`);
  console.log(`  [6] 📚 Anti-Phishing Resources & Reporting Portals`);
  console.log(`  [0] ❌ Exit Simulator\n`);

  const choice = await askQuestion(`${colors.yellow}Enter selection [0-6]: ${colors.reset}`);

  switch (choice.trim()) {
    case '1':
      await showIntroHistory();
      break;
    case '2':
      await runSpearLab();
      break;
    case '3':
      await runVishingLab();
      break;
    case '4':
      await runSmishingLab();
      break;
    case '5':
      await showNews();
      break;
    case '6':
      await showResources();
      break;
    case '0':
      console.log(`\n${colors.green}Thank you for training with Do.Not.Click! Stay secure.${colors.reset}\n`);
      rl.close();
      return;
    default:
      await askQuestion(`\n${colors.red}Invalid selection. Press Enter to try again.${colors.reset}`);
  }
  await mainMenu();
}

async function showIntroHistory() {
  clearScreen();
  printBanner();
  console.log(`${colors.cyan}${colors.bright}WHAT IS PHISHING?${colors.reset}`);
  console.log(`Phishing is a social engineering attack where bad actors pose as trusted entities`);
  console.log(`to manipulate victims into handing over credentials, OTP codes, or executing wire transfers.\n`);

  console.log(`${colors.yellow}${colors.bright}EVOLUTION TIMELINE (1995 - 2026):${colors.reset}`);
  console.log(`  • 1995: AOL Credit Card Harvesting (AOHell dialup theft)`);
  console.log(`  • 2003: PayPal & eBay Mass Email Spoofing`);
  console.log(`  • 2011: The RSA Breach (High-value spear phishing)`);
  console.log(`  • 2021: Package Smishing & MFA Push Fatigue Scams`);
  console.log(`  • 2026: AI Deepfake Audio Vishing & AiTM Reverse Proxies\n`);

  await askQuestion(`${colors.dim}Press Enter to return to main menu...${colors.reset}`);
}

async function runSpearLab() {
  clearScreen();
  printBanner();
  console.log(`${colors.red}${colors.bright}=== LAB 01: SPEAR PHISHING SCENARIO ===${colors.reset}`);
  console.log(`${colors.yellow}Target Victim:${colors.reset} Sarah Jenkins (CFO, Apex Global Logistics)`);
  console.log(`${colors.yellow}Sender Display:${colors.reset} David Sterling <d.sterling@apex-globa1-logistics.com>`);
  console.log(`${colors.yellow}Subject:${colors.reset} URGENT: Confidential Wire Transfer Needed Before 5 PM\n`);
  
  console.log(`${colors.white}EMAIL BODY:${colors.reset}`);
  console.log(`"Sarah, I am in closed-door M&A negotiations for a secret acquisition.`);
  console.log(`Wire $245,000 immediately to the attached account before 5 PM.`);
  console.log(`Do NOT discuss with anyone due to SEC secrecy rules."\n`);

  console.log(`${colors.cyan}RAW HEADER INSPECTOR:${colors.reset}`);
  console.log(`  From: d.sterling@apex-globa1-logistics.com [Note digit '1' in domain!]`);
  console.log(`  Reply-To: d.sterling.exec@mail-temp-gateway.net`);
  console.log(`  Received-SPF: FAIL | DKIM: FAIL\n`);

  console.log(`${colors.yellow}YOUR SECURITY DECISION:${colors.reset}`);
  console.log(`  [1] Flag as SPEAR PHISHING ATTACK`);
  console.log(`  [2] Mark as SAFE LEGITIMATE EMAIL`);

  const choice = await askQuestion(`\nEnter choice [1-2]: `);

  if (choice.trim() === '1') {
    console.log(`\n${colors.green}${colors.bright}✅ CORRECT! +100 PTS${colors.reset}`);
    console.log(`Explanation: Typosquatting domain (globa1 with 1) and Reply-To header mismatch.`);
    score += 100;
  } else {
    console.log(`\n${colors.red}${colors.bright}❌ INCORRECT!${colors.reset}`);
    console.log(`Explanation: This was CEO Fraud Spear Phishing.`);
  }

  await askQuestion(`\n${colors.dim}Press Enter to continue...${colors.reset}`);
}

async function runVishingLab() {
  clearScreen();
  printBanner();
  console.log(`${colors.green}${colors.bright}=== LAB 02: VISHING (VOICE PHISHING) SCENARIO ===${colors.reset}`);
  console.log(`${colors.yellow}Incoming Call From:${colors.reset} IT Helpdesk (+1-800-555-0199)`);
  console.log(`${colors.yellow}Caller Voice:${colors.reset} "Hello, we detected an unauthorized Moscow login on your VPN right now.`);
  console.log(`I pushed an MFA prompt to your authenticator app. Tap 'Approve' and read me the 2-digit code."\n`);

  console.log(`${colors.yellow}YOUR SECURITY RESPONSE:${colors.reset}`);
  console.log(`  [1] Approve prompt and read the code over the phone`);
  console.log(`  [2] Refuse code, hang up, and call official IT Helpdesk at extension #4357`);

  const choice = await askQuestion(`\nEnter choice [1-2]: `);

  if (choice.trim() === '2') {
    console.log(`\n${colors.green}${colors.bright}✅ EXCELLENT DEFENSE! +100 PTS${colors.reset}`);
    console.log(`Explanation: IT support will NEVER ask for MFA push codes over the phone.`);
    score += 100;
  } else {
    console.log(`\n${colors.red}${colors.bright}❌ HIGH RISK CHOICE!${colors.reset}`);
    console.log(`Explanation: You fell for an MFA Push Fatigue voice scam.`);
  }

  await askQuestion(`\n${colors.dim}Press Enter to continue...${colors.reset}`);
}

async function runSmishingLab() {
  clearScreen();
  printBanner();
  console.log(`${colors.magenta}${colors.bright}=== LAB 03: SMISHING (SMS PHISHING) SCENARIO ===${colors.reset}`);
  console.log(`${colors.yellow}Incoming SMS from +1 (415) 890-3412:${colors.reset}`);
  console.log(`"USPS: Package #US-9402 cannot be delivered due to invalid address.`);
  console.log(`Update within 12 hrs: https://usps-redelivery-portal-update.com/tracking"\n`);

  console.log(`${colors.cyan}UNSHORTENER TOOL LOOKUP:${colors.reset}`);
  console.log(`  Redirect Domain: usps-redelivery-portal-update.com (Registered 2 days ago in Russia)`);
  console.log(`  Official USPS Domain: usps.com\n`);

  console.log(`${colors.yellow}YOUR SECURITY DECISION:${colors.reset}`);
  console.log(`  [1] Flag as FRAUDULENT SMISHING`);
  console.log(`  [2] Click link to update address`);

  const choice = await askQuestion(`\nEnter choice [1-2]: `);

  if (choice.trim() === '1') {
    console.log(`\n${colors.green}${colors.bright}✅ CORRECT ANALYSIS! +100 PTS${colors.reset}`);
    console.log(`Explanation: Fake redelivery portal stealing credit card info.`);
    score += 100;
  } else {
    console.log(`\n${colors.red}${colors.bright}❌ INCORRECT!${colors.reset}`);
    console.log(`Explanation: This was a package smishing scam.`);
  }

  await askQuestion(`\n${colors.dim}Press Enter to continue...${colors.reset}`);
}

async function showNews() {
  clearScreen();
  printBanner();
  console.log(`${colors.cyan}${colors.bright}THREAT INTEL NEWS FEED:${colors.reset}\n`);
  console.log(`1. Rise of AI Deepfake Voice Scams Target Corporate Executives (Vishing 2.0)`);
  console.log(`2. Quishing Escalation: Malicious QR Code Stickers Placed on Public Parking Meters`);
  console.log(`3. MFA Push Fatigue & Session Hijacking: Adversary-in-the-Middle (AiTM) Toolkits\n`);
  await askQuestion(`${colors.dim}Press Enter to return...${colors.reset}`);
}

async function showResources() {
  clearScreen();
  printBanner();
  console.log(`${colors.green}${colors.bright}CYBERSECURITY RESOURCES:${colors.reset}\n`);
  console.log(`  • CISA Anti-Phishing Guidance: https://www.cisa.gov/phishing`);
  console.log(`  • NIST SP 800-177 Trustworthy Email Standard`);
  console.log(`  • Report Phishing to FTC: https://reportfraud.ftc.gov/\n`);
  await askQuestion(`${colors.dim}Press Enter to return...${colors.reset}`);
}

// Start CLI
mainMenu();
