import { test as base, chromium, BrowserContext, expect as baseExpect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { inputs } from "../src/inputFile";

type AuthFixtures = {
  adminContext: BrowserContext;
  adminPage: LoginPage;
};

export const test = base.extend<AuthFixtures>({
  adminContext: async ({}, use) => {
    // Launch browser context for Admin with storage state
    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page = await context.newPage();
    const loginPage = new LoginPage(page);

    // Login once and save storage state
    await loginPage.gotoURL(inputs.baseUrl);
    await loginPage.login(inputs.validLoginUserName, inputs.validLoginPassword);

    await context.storageState({ path: 'storageState/adminStorage.json' });

    await use(context);  // Provide the logged-in context to tests
    await context.close();
    await browser.close();
  },

  adminPage: async ({ adminContext }, use) => {
    const page = await adminContext.newPage();
    const loginPage = new LoginPage(page);
    await use(loginPage);
  }
});

// ✅ re-export expect so tests can use it
export const expect = baseExpect;
