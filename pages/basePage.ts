import { Page, Locator, expect } from "@playwright/test";

    export class BasePage {

    private page: Page;
  private invalidLoginMsg: Locator;
    constructor(page) {
        this.page = page;
        this.invalidLoginMsg = page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']")

    }

    async verifyLoginErrorMsg(msgToVerify: string) {
        await expect(this.invalidLoginMsg).toHaveText(msgToVerify);
    }

    async goToAdmin() {
        await this.page.getByRole('link', { name: 'Admin' }).click();
        await expect(this.page.getByRole('heading', { name: 'Admin' })).toBeVisible();
    }
}
