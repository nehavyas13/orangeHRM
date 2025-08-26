const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { inputs } = require('../src/inputFile');
const { BasePage } = require('../pages/basePage');
const { constants } = require('../src/data/constantsExtentions/errorMessages');



test.describe('Login Tests', () => {

    test('Invalid username with valid password', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const basePage = new BasePage(page);
        await loginPage.gotoURL(inputs.baseUrl);
        await loginPage.login(inputs.inValidLoginUserName, inputs.validLoginPassword);
        await basePage.verifyLoginErrorMsg(constants.invalidLogin);
    });

    test('Valid username with invalid password', async ({ page }) => {
        const basePage = new BasePage(page);
        const loginPage = new LoginPage(page);
        await loginPage.gotoURL(inputs.baseUrl);
        await loginPage.login(inputs.validLoginUserName, inputs.inValidLoginPassword);
        await basePage.verifyLoginErrorMsg(constants.invalidLogin);
    });

    test('Valid username and password', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.gotoURL(inputs.baseUrl);
        await loginPage.login(inputs.validLoginUserName, inputs.validLoginPassword);
        await expect(loginPage.dashboardHeader).toHaveText('Dashboard');
    });

})