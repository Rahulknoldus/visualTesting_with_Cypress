
describe('ParaBank Login Page', () => {
  it('should match the expected snapshot', () => {
    cy.visit('https://parabank.parasoft.com/parabank');
    cy.compareSnapshot('login', {
      capture: 'fullPage',
      errorThreshold: 0.0,
    });  
  });
});
