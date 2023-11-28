import { goToShipping } from '../pageobjects/addresses.page';
import { navigateToPage } from '../pageobjects/base.page';
import { goToAddresses } from '../pageobjects/cart.page';
import { LANDING_URL } from '../pageobjects/common-constants';
import {
  clickSignInButton,
  clickTshirtsLink,
  validateSignInButtonIsVisible,
  validateWelcomeMessageIsVisible,
} from '../pageobjects/home.page';
import { validateAuthenticationTitleText, validateInputFieldsAreVisible } from '../pageobjects/login.page';
import { confirmOrder, payByBankWire, validateOrderIsConfirmed } from '../pageobjects/payment.page';
import { clickAddTShirtToCartButton, goToCart } from '../pageobjects/productsearch.page';
import { goToPayment } from '../pageobjects/shipping.page';
import { loginWithValidCredentials } from '../stepdefinitions/login.steps';

describe('Automation Exercise test cases', () => {
  it('Login then add a product to the cart and make a purchase', () => {
    navigateToPage(LANDING_URL);
    validateSignInButtonIsVisible();
    clickSignInButton();
    validateAuthenticationTitleText();
    validateInputFieldsAreVisible();
    loginWithValidCredentials();
    validateWelcomeMessageIsVisible();
    clickTshirtsLink();
    clickAddTShirtToCartButton();
    goToCart();
    goToAddresses();
    goToShipping();
    goToPayment();
    payByBankWire();
    confirmOrder();
    validateOrderIsConfirmed();
  });
});
