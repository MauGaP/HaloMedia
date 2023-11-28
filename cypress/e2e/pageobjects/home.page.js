import { clickElement, validateElementIsVisible } from './base.page';

export const LOGINSIGNUP_BUTTON = '.login';

export const WELCOME_MESSAGE = '.info-account';

export const TSHIRTS_LINK = '.sf-menu > :nth-child(3) > a';

export const clickTshirtsLink = () => {
  clickElement(TSHIRTS_LINK);
};

export const clickSignInButton = () => {
  clickElement(LOGINSIGNUP_BUTTON);
};

export const validateWelcomeMessageIsVisible = () => {
  validateElementIsVisible(WELCOME_MESSAGE);
};

export const validateSignInButtonIsVisible = () => {
  validateElementIsVisible(LOGINSIGNUP_BUTTON);
};
