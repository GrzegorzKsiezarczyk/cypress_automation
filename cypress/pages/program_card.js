/// <reference types="Cypress" />
class program_card
{
addtofavorite()
{
  cy.xpath('/html/body/div/section/div[2]/p[3]/img')
  .should('be.visible')
  .click()
}
buttonback(){
  cy.get('.navBtn').contains('Back')
  .should('be.visible')
  .click()
}
}
export default program_card