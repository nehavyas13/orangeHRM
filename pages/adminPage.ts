import Chance from "chance";
const chance = new Chance();
import { Page, Locator, expect } from "@playwright/test";
import fs from 'fs';
import path from 'path';

let empName = chance.first();
let password = chance.string({ length: 9, casing: 'lower', alpha: true }) + "@123";
let userName = "N_user" + empName;



export class AdminPage {

    private page: Page;
    public username: Locator;
    public password: Locator;
    public confirmPassword: Locator;
    public empName: Locator;
    public selectEmplist: Locator;
    public userRole: Locator;
    public selectUserRole: Locator;
    public selectStatus: Locator;
    public createdEmp: Locator;
    public searchEmp: Locator;

    constructor(page) {
        this.page = page;
        this.empName = page.locator("//p[@class='oxd-userdropdown-name']");
        this.username = page.locator('//label[text()="Username"]/../following-sibling::div/input');
        this.password = page.locator('//label[text()="Password"]/../following-sibling::div/input');
        this.confirmPassword = page.locator('//label[text()="Confirm Password"]/../following-sibling::div/input');
        this.selectEmplist = page.locator('//div[@class="oxd-autocomplete-dropdown --positon-bottom"]//div//span');
        this.userRole = page.locator('//div[@class="oxd-select-text-input"]');
        this.selectUserRole = page.locator('//div[@class="oxd-select-dropdown --positon-bottom"]//div');
        this.selectStatus = page.locator('//div[@role="option"]//span[text()="Enabled"]');
        this.createdEmp = page.locator('div[contains(text(),userName)]');
        this.searchEmp = page.locator("//input[@class='oxd-input oxd-input--active']");

    }

    async clickAddBtn() {
        await this.page.getByRole('button', { name: 'Add' }).click();

    }


    async createEmployee() {
        await this.userRole.first().click();
        await this.selectUserRole.last().click();
        const empName = await this.getEmpName();
        await this.page.getByPlaceholder('Type for hints...').fill(empName);
        await this.page.getByRole('listbox').waitFor();
        await this.selectEmplist.click();
        await this.userRole.last().click();
        await this.selectStatus.click();
        await this.username.fill(userName);
        await this.password.fill(password);
        await this.confirmPassword.fill(password);
        await this.page.getByRole('button', { name: 'Save' }).click();
 // Save credentials to JSON for parallel-safe access
        const filePath = path.join(__dirname, '../utils/employeeData.json');
        fs.writeFileSync(filePath, JSON.stringify({ username: userName, password: password }, null, 2));
    
    }

    async getEmpName() {
        await this.empName.waitFor();
        return await this.empName.innerText();
    }

    async assertEmployeeCreated() {
        await this.searchEmp.last().fill(userName);
        await this.page.getByRole('button', { name: 'Search' }).click();
        await expect(this.page.getByText(userName)).toBeVisible();
    }
}

