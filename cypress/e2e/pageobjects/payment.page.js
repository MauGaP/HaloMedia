import { clickElement, validateElementText } from './base.page';

export const CONFIRMORDER_BUTTON = '#cart_navigation > .button > span';

export const CONFIRMEDORDER_MESSAGE = '.alert';

export const BANKWIRE_OPTION = '.bankwire';

export const payByBankWire = () => {
  clickElement(BANKWIRE_OPTION);
};

export const confirmOrder = () => {
  clickElement(CONFIRMORDER_BUTTON);
};

export const validateOrderIsConfirmed = () => {
  validateElementText(CONFIRMEDORDER_MESSAGE, 'Your order on My Shop is complete.');
};
