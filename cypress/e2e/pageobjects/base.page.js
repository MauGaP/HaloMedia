export const clickElement = selector => {
  cy.get(selector).click();
};

export const inputText = (selector, text) => {
  cy.get(selector).type(text);
};

export const navigateToPage = url => {
  cy.visit(url);
};

export const validateElementText = (selector, text) => {
  cy.get(selector).should('have.text', text);
};

export const validateElementIsVisible = selector => {
  cy.get(selector).should('be.visible');
};
