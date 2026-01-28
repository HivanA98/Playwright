import { expect } from '@playwright/test';

export class InventoryPage {
  constructor(page) {
    this.page = page;

    this.cartButton = page.locator('.shopping_cart_link');

    this.products = {
      bikeLight: page.locator('#add-to-cart-sauce-labs-bike-light'),
      boltTShirt: page.locator('#add-to-cart-sauce-labs-bolt-t-shirt'),
      fleeceJacket: page.locator('#add-to-cart-sauce-labs-fleece-jacket'),
      onesie: page.locator('#add-to-cart-sauce-labs-onesie'),
    };
  }

  async addDefaultItems() {
    for (const product of Object.values(this.products)) {
      await expect(product).toBeVisible();
      await product.click();
    }
  }

  async goToCart() {
    await expect(this.cartButton).toBeVisible();
    await this.cartButton.click();
  }
}