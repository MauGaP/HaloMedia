import { clickElement } from './base.page';

export const ADDTSHIRTTOCART_BUTTON = '.ajax_add_to_cart_button > span';

export const PROCEEDTOCHECKOUT_BUTTON = '.button-container > .button-medium > span';

export const clickAddTShirtToCartButton = () => {
  clickElement(ADDTSHIRTTOCART_BUTTON);
};

export const goToCart = () => {// I renamed this function because the action it is performing is going to the cart, even though the button is called 'PROCEED TO CHECKOUT'
  clickElement(PROCEEDTOCHECKOUT_BUTTON);
};
