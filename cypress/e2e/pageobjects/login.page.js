import { clickElement, inputText, validateElementIsVisible, validateElementText } from './base.page';

export const LOGIN_BUTTON = '#SubmitLogin';
export const SIGNOUT_BUTTON = '.logout';

export const USERNAME_INPUT = '#email';
export const PASSWORD_INPUT = '#passwd';

export const AUTHENTICATION_TITLE = '.page-heading';

export const clickSignInButton = () => {
  //the name of this button is wrong in the page. it should be login
  clickElement(LOGIN_BUTTON);
};

export const clickSignOutButton = () => {
  clickElement(SIGNOUT_BUTTON);
};

export const validateAuthenticationTitleText = () => {
  validateElementText(AUTHENTICATION_TITLE, 'Authentication');
};

export const validateInputFieldsAreVisible = () => {
  validateElementIsVisible(USERNAME_INPUT);
  validateElementIsVisible(PASSWORD_INPUT);
};

export const inputUsername = username => {
  inputText(USERNAME_INPUT, username);
};

export const inputPassword = password => {
  inputText(PASSWORD_INPUT, password);
};
