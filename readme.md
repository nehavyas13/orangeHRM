# orangeHRM Assignment

This repository contains end-to-end test automation using Microsoft Playwright with TypeScript.

# Features

Cross-browser testing: Chromium, Firefox, WebKit.
Parallel test execution.
Page Object Model (POM) design for better maintainability.
HTML reports.

📂 Project Structure
playwright-automation/
│── tests/               # Test specs
│── pages/               # Page Object Model files
│── fixtures/            # Test data / test fixtures
│── utils/               # Helper functions
│── playwright.config.ts # Playwright configuration
│── package.json
│── README.md

# Prerequisites

Node.js
npm

# Installation

Clone the repo and install dependencies:

git clone https://github.com/your-org/playwright-automation.git
cd playwright-automation
npm install


Install Playwright browsers:

npx playwright install

# Running Tests
Run all tests
npx playwright test

# Run tests in headed mode
npx playwright test --headed

# Run tests in specific browser
npx playwright test --project=chromium

# Run specific test file
npx playwright test tests/login.spec.ts

# Run tests with UI mode
npx playwright test --ui

# Test Reports
HTML Report
Generate and open report:
npx playwright show-report

# Best Practices
Follow Page Object Model (POM).
Keep test data separate from test scripts.
Use fixtures for setup/teardown.
Run tests in parallel for speed.
Use meaningful test names and tags.