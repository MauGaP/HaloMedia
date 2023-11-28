import { clickSignInButton, inputPassword, inputUsername } from '../pageobjects/login.page';

export const loginWithValidCredentials = () => {
  loginHelper('mauro.pedano@hotmail.com', 'test1234');
};

export const loginWithInvalidCredentials = () => {
  loginHelper('test', 'test');
};

const loginHelper = (username, password) => {
  inputUsername(username);
  inputPassword(password);
  clickSignInButton(); //this button should be named login, but I'm following what the page says rather than the function it does.
};
