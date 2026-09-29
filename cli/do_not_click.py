#!/usr/bin/env python3
"""
Do.Not.Click - Phishing Awareness Simulator (Python CLI Build)
Zero external pip dependencies! Runs with standard Python 3 library.
"""

import sys
import os
import random

# ANSI Escape Colors
CYAN = "\033[96m"
GREEN = "\033[92m"
YELLOW = "\033[93m"
RED = "\033[91m"
MAGENTA = "\033[95m"
BOLD = "\033[1m"
DIM = "\033[2m"
RESET = "\033[0m"

guest_id = f"GUEST-PY-{random.randint(1000, 9999)}"
score = 0

def clear_screen():
    os.system('cls' if os.name == 'nt' else 'clear')

def print_banner():
    print(f"{CYAN}{BOLD}")
    print("====================================================================")
    print("  🚨 DO.NOT.CLICK - PHISHING AWARENESS SIMULATOR v1.0 [PYTHON CLI] 🚨")
    print(f"===================================================================={RESET}")
    print(f"{GREEN}Auto-Guest ID: {BOLD}{guest_id}{RESET} | {YELLOW}Score: {score} PTS{RESET}")
    print(f"{DIM}Educational Security Sandbox - No Credentials Harvested{RESET}\n")

def main_menu():
    global score
    while True:
        clear_screen()
        print_banner()
        print(f"{CYAN}{BOLD}MAIN MENU:{RESET}")
        print("  [1] 📖 What is Phishing & History Timeline (1995 - 2026)")
        print("  [2] 🎯 Lab 01: Spear Phishing (Email Header & Typosquatting)")
        print("  [3] 📞 Lab 02: Vishing (Voice Phishing & MFA Defense)")
        print("  [4] 📱 Lab 03: Smishing (SMS Phishing & URL Expander)")
        print("  [5] 📰 Threat Intelligence & News Feed")
        print("  [6] 📚 Anti-Phishing Resources & Incident Reporting Portals")
        print("  [0] ❌ Exit Simulator\n")

        choice = input(f"{YELLOW}Enter selection [0-6]: {RESET}").strip()

        if choice == '1':
            show_intro()
        elif choice == '2':
            run_spear_lab()
        elif choice == '3':
            run_vishing_lab()
        elif choice == '4':
            run_smishing_lab()
        elif choice == '5':
            show_news()
        elif choice == '6':
            show_resources()
        elif choice == '0':
            print(f"\n{GREEN}Thank you for training with Do.Not.Click! Stay secure.{RESET}\n")
            sys.exit(0)

def show_intro():
    clear_screen()
    print_banner()
    print(f"{CYAN}{BOLD}WHAT IS PHISHING?{RESET}")
    print("Phishing is a social engineering attack where bad actors pose as trusted entities")
    print("to manipulate victims into handing over credentials, OTP codes, or executing wire transfers.\n")

    print(f"{YELLOW}{BOLD}EVOLUTION TIMELINE (1995 - 2026):{RESET}")
    print("  • 1995: AOL Credit Card Harvesting (AOHell dialup theft)")
    print("  • 2003: PayPal & eBay Mass Email Spoofing")
    print("  • 2011: The RSA Breach (High-value spear phishing)")
    print("  • 2021: Package Smishing & MFA Push Fatigue Scams")
    print("  • 2026: AI Deepfake Audio Vishing & AiTM Reverse Proxies\n")

    input(f"{DIM}Press Enter to return to main menu...{RESET}")

def run_spear_lab():
    global score
    clear_screen()
    print_banner()
    print(f"{RED}{BOLD}=== LAB 01: SPEAR PHISHING SCENARIO ==={RESET}")
    print(f"{YELLOW}Target Victim:{RESET} Sarah Jenkins (CFO, Apex Global Logistics)")
    print(f"{YELLOW}Sender Display:{RESET} David Sterling <d.sterling@apex-globa1-logistics.com>")
    print(f"{YELLOW}Subject:{RESET} URGENT: Confidential Wire Transfer Needed Before 5 PM\n")

    print(f"EMAIL BODY:")
    print('"Sarah, I am in closed-door M&A negotiations for a secret acquisition.')
    print('Wire $245,000 immediately to the attached account before 5 PM.')
    print('Do NOT discuss with anyone due to SEC secrecy rules."\n')

    print(f"{CYAN}RAW HEADER INSPECTOR:{RESET}")
    print("  From: d.sterling@apex-globa1-logistics.com [Note digit '1' in domain!]")
    print("  Reply-To: d.sterling.exec@mail-temp-gateway.net")
    print("  Received-SPF: FAIL | DKIM: FAIL\n")

    print(f"{YELLOW}YOUR SECURITY DECISION:{RESET}")
    print("  [1] Flag as SPEAR PHISHING ATTACK")
    print("  [2] Mark as SAFE LEGITIMATE EMAIL")

    choice = input("\nEnter choice [1-2]: ").strip()
    if choice == '1':
        print(f"\n{GREEN}{BOLD}✅ CORRECT! +100 PTS{RESET}")
        print("Explanation: Typosquatting domain (globa1 with 1) and Reply-To header mismatch.")
        score += 100
    else:
        print(f"\n{RED}{BOLD}❌ INCORRECT!{RESET}")
        print("Explanation: This was CEO Fraud Spear Phishing.")

    input(f"\n{DIM}Press Enter to continue...{RESET}")

def run_vishing_lab():
    global score
    clear_screen()
    print_banner()
    print(f"{GREEN}{BOLD}=== LAB 02: VISHING (VOICE PHISHING) SCENARIO ==={RESET}")
    print(f"{YELLOW}Incoming Call From:{RESET} IT Helpdesk (+1-800-555-0199)")
    print(f"{YELLOW}Caller Voice:{RESET} \"Hello, we detected an unauthorized Moscow login on your VPN right now.")
    print('I pushed an MFA prompt to your authenticator app. Tap \'Approve\' and read me the 2-digit code."\n')

    print(f"{YELLOW}YOUR SECURITY RESPONSE:{RESET}")
    print("  [1] Approve prompt and read the code over the phone")
    print("  [2] Refuse code, hang up, and call official IT Helpdesk at extension #4357")

    choice = input("\nEnter choice [1-2]: ").strip()
    if choice == '2':
        print(f"\n{GREEN}{BOLD}✅ EXCELLENT DEFENSE! +100 PTS{RESET}")
        print("Explanation: IT support will NEVER ask for MFA push codes over the phone.")
        score += 100
    else:
        print(f"\n{RED}{BOLD}❌ HIGH RISK CHOICE!{RESET}")
        print("Explanation: You fell for an MFA Push Fatigue voice scam.")

    input(f"\n{DIM}Press Enter to continue...{RESET}")

def run_smishing_lab():
    global score
    clear_screen()
    print_banner()
    print(f"{MAGENTA}{BOLD}=== LAB 03: SMISHING (SMS PHISHING) SCENARIO ==={RESET}")
    print(f"{YELLOW}Incoming SMS from +1 (415) 890-3412:{RESET}")
    print('"USPS: Package #US-9402 cannot be delivered due to invalid address.')
    print('Update within 12 hrs: https://usps-redelivery-portal-update.com/tracking"\n')

    print(f"{CYAN}UNSHORTENER TOOL LOOKUP:{RESET}")
    print("  Redirect Domain: usps-redelivery-portal-update.com (Registered 2 days ago in Russia)")
    print("  Official USPS Domain: usps.com\n")

    print(f"{YELLOW}YOUR SECURITY DECISION:{RESET}")
    print("  [1] Flag as FRAUDULENT SMISHING")
    print("  [2] Click link to update address")

    choice = input("\nEnter choice [1-2]: ").strip()
    if choice == '1':
        print(f"\n{GREEN}{BOLD}✅ CORRECT ANALYSIS! +100 PTS{RESET}")
        print("Explanation: Fake redelivery portal stealing credit card info.")
        score += 100
    else:
        print(f"\n{RED}{BOLD}❌ INCORRECT!{RESET}")
        print("Explanation: This was a package smishing scam.")

    input(f"\n{DIM}Press Enter to continue...{RESET}")

def show_news():
    clear_screen()
    print_banner()
    print(f"{CYAN}{BOLD}THREAT INTEL NEWS FEED:{RESET}\n")
    print("1. Rise of AI Deepfake Voice Scams Target Corporate Executives (Vishing 2.0)")
    print("2. Quishing Escalation: Malicious QR Code Stickers Placed on Public Parking Meters")
    print("3. MFA Push Fatigue & Session Hijacking: Adversary-in-the-Middle (AiTM) Toolkits\n")
    input(f"{DIM}Press Enter to return...{RESET}")

def show_resources():
    clear_screen()
    print_banner()
    print(f"{GREEN}{BOLD}CYBERSECURITY RESOURCES:{RESET}\n")
    print("  • CISA Anti-Phishing Guidance: https://www.cisa.gov/phishing")
    print("  • NIST SP 800-177 Trustworthy Email Standard")
    print("  • Report Phishing to FTC: https://reportfraud.ftc.gov/\n")
    input(f"{DIM}Press Enter to return...{RESET}")

if __name__ == "__main__":
    main_menu()
