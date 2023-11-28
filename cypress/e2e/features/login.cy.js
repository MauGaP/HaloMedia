import { navigateToPage } from '../pageobjects/base.page';
import { LANDING_URL } from '../pageobjects/common-constants';
import {
  clickSignInButton,
  validateSignInButtonIsVisible,
  validateWelcomeMessageIsVisible,
} from '../pageobjects/home.page';
import {
  clickSignOutButton,
  validateAuthenticationTitleText,
  validateInputFieldsAreVisible,
} from '../pageobjects/login.page';
import { loginWithValidCredentials } from '../stepdefinitions/login.steps';

describe('Automation Exercise test cases', () => {
  it('Login User with correct email and password', () => {
    navigateToPage(LANDING_URL);
    validateSignInButtonIsVisible();
    clickSignInButton();
    validateAuthenticationTitleText();
    validateInputFieldsAreVisible();
    loginWithValidCredentials();
    validateWelcomeMessageIsVisible();// here we could validate that the name of the user is on the header, I decided this message because is simpler.
    clickSignOutButton();
    validateAuthenticationTitleText();
  });
});
