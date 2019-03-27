context('App', () => {
  it('works', () => {
    cy.visit('http://localhost:3000')

    const root = cy.root();
    const button = root.find('.paypal-button')

    button.click().then(x => console.log(root.find('body')));
  })
})