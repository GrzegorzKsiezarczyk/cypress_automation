/// <reference types="Cypress" />
class home_page
{
firstprogram()
{
    cy.get('.ng-binding', { timeout: 5000 }).should('be.visible').contains(' Thomas & Friends: All Engines Go ')
    .click({force: true})

}
checkfavoriteprogram()
{
    cy.xpath('/html/body/div/section/div[2]/a/div[1]/img')
     .should('be.visible')
}
Tests12showsPerPage() {
    cy.xpath('/html/body/div/section/p[1]/select').should('be.visible')
    .select("12")
    .invoke("val")
    cy.get('a.ng-binding').should('be.visible').contains('6')

}
Tests25showsPerPage() {
    cy.xpath('/html/body/div/section/p[1]/select').should('be.visible')
    .select("25")
    .invoke("val")
    cy.scrollTo('bottom')
    cy.get('a.ng-binding').should('be.visible').contains('3')
    cy.get('a.ng-binding').contains('6').should('not.exist')


}
Tests50showsPerPage() {
    cy.xpath('/html/body/div/section/p[1]/select').should('be.visible')
    .select("50")
    .invoke("val")
    cy.scrollTo('bottom')
    cy.get('a.ng-binding').should('be.visible').contains('2')
    cy.get('a.ng-binding').contains('3').should('not.exist')
}
Tests100showsPerPage() {
    cy.xpath('/html/body/div/section/p[1]/select').should('be.visible')
    .select("100")
    .invoke("val")
    cy.scrollTo('bottom')
    cy.get('a.ng-binding').should('not.exist')

}
SearchCorrectWord(){
    cy.get('[ng-model=search]').should('be.visible').type('Naked')
    cy.get('.ng-binding').contains(' Naked News ')
    cy.xpath('/html/body/div/section/button').click()
}
SearchBadWord(){
    cy.get('[ng-model=search]').should('be.visible').type('Poland')
    cy.get('.ng-binding').contains('Poland').should('not.exist')

}
CleanInput(){
    cy.xpath('/html/body/div/section/button').click()
    //button shouldn't be visible all time
    cy.xpath('/html/body/div/section/button').should('not.be.visible') 


}


}
export default home_page