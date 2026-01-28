import { expect } from '@playwright/test';

export class CheckoutPage {
  constructor(page) {
    this.page = page;

    this.firstName   = page.locator('#first-name');
    this.lastName    = page.locator('#last-name');
    this.postalCode  = page.locator('#postal-code');
    this.continueBtn = page.locator('#continue');
    this.finishBtn   = page.locator('#finish');
    this.backHome    = page.locator('#back-to-products');
  }

  async fillAddress(first, last, postal) {
    await this.firstName.fill(first);
    await this.lastName.fill(last);
    await this.postalCode.fill(postal);
  }

  async finishCheckout() {
    await this.continueBtn.click();
    await this.finishBtn.click();
    await expect(this.backHome).toContainText('Back Home');
  }
}