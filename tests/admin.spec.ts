import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { AdminPage } from "../pages/adminPage";
import { inputs } from "../src/inputFile";
import { BasePage } from "../pages/basePage";
import fs from 'fs';
import path from 'path';

test.describe('Admin and Employee Workflow', () => {

    test("Admin creates new employee", async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page);
        const basePage = new BasePage(page);
        await loginPage.gotoURL(inputs.baseUrl);
        await loginPage.login(inputs.validLoginUserName, inputs.validLoginPassword);
        await expect(loginPage.dashboardHeader).toHaveText('Dashboard');
        await basePage.goToAdmin();
        await adminPage.clickAddBtn();
        await adminPage.createEmployee();
        await expect(page.getByRole('heading', { name: 'System Users' })).toBeVisible({ timeout: 10000 });
        await adminPage.assertEmployeeCreated();
    });

    test('Login as newly created employee', async ({ page }) => {
        const filePath = path.join(__dirname, '../utils/employeeData.json');
        const { username, password } = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        const loginPage = new LoginPage(page);
        await loginPage.gotoURL(inputs.baseUrl);
        await loginPage.login(username, password);
        await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible({ timeout: 10000 });
    });
});
