import { Page, Locator, expect } from "@playwright/test";
export class LoginPage {
    private page: Page;
    public dashboardHeader: Locator;
    constructor(page) {
        this.page = page;
        this.dashboardHeader = this.page.getByRole('heading', { name: 'Dashboard' });
    }

    async login(username: string, password: string) {
        await this.page.getByPlaceholder('Username').fill(username);
        await this.page.getByPlaceholder('Password').fill(password);
        await this.page.getByRole('button', { name: 'Login' }).click();
    }

    async gotoURL(url: string) {
        await this.page.goto(url);

    }

}
