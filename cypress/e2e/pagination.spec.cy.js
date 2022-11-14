import home_page from '../pages/home_page'
describe('X Shows per page-test', () => {
  const HomePage = new home_page
beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit('https://clearcodehq.github.io/qa-intern-test/#/home')

});
afterEach(() => {
  
});
  it('12 shows per page,', () => {
    HomePage.Tests12showsPerPage()

  })
  it('25 shows per page,', () => {
    HomePage.Tests25showsPerPage()

  })
  it('50 shows per page', () => {
    HomePage.Tests50showsPerPage()
  })
  it('100 shows per page', () => {
    HomePage.Tests100showsPerPage()
  })
})
