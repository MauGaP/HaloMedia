import { clickElement } from './base.page';

export const PROCEEDTOCHECKOUT_BUTTON = '.cart_navigation > .button > span';

export const goToShipping = () => {
  clickElement(PROCEEDTOCHECKOUT_BUTTON);
};
