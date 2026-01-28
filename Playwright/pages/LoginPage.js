import { expect } from '@playwright/test';

export class LoginPage {
  constructor(page) {
    this.page = page;

    /* ========= SELECTORS ========= */
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton   = page.locator('#login-button');
    this.errorMessage  = page.locator('.error-message-container');
  }

  /* ========= ACTIONS ========= */
  async visit() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async inputUsername(username) {
    await this.usernameInput.fill(username);
    await expect(this.usernameInput).toHaveValue(username);
  }

  async inputPassword(password) {
    await this.passwordInput.fill(password);
    await expect(this.passwordInput).toHaveValue(password);
  }

  async clickLogin() {
    await expect(this.loginButton).toBeEnabled();
    await this.loginButton.click();
  }

  /* ========= ASSERTIONS ========= */
  async verifyLoginError(message) {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toContainText(message);
  }
}