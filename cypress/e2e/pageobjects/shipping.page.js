import { clickElement } from './base.page';

export const PROCEEDTOCHECKOUT_BUTTON = '.cart_navigation > .button > span'; // YET ANOTHER PROCEED TO CHECKOUT BUTTON, SORRY ABOUT THAT

export const CONDITIONS_CHECK = '#cgv';

export const goToPayment = () => {
  acceptConditions();
  clickElement(PROCEEDTOCHECKOUT_BUTTON);
};

export const acceptConditions = () => {
  clickElement(CONDITIONS_CHECK);
};
