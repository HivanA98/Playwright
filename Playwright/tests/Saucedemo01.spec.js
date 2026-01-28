import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { users } from '../test-data/users';

test.describe('All Account Login - Playwright POM', () => {

  test('standard_user flow', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.visit();

    await loginPage.inputUsername(users.standard.username);
    await loginPage.inputPassword(users.standard.password);
    await loginPage.clickLogin();

  });

  test('locked_out_user', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.visit();

    await loginPage.inputUsername(users.locked.username);
    await loginPage.inputPassword(users.locked.password);
    await loginPage.clickLogin();

    await loginPage.verifyLoginError(
      'Epic sadface: Sorry, this user has been locked out.'
    );
  });

});