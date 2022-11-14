import home_page from '../pages/home_page'
describe('Search Input', () => {
  const HomePage = new home_page
beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit('https://clearcodehq.github.io/qa-intern-test/#/home')

});
afterEach(() => {
  
});
  it('searching for correct wording,', () => {
    HomePage.SearchCorrectWord()

  })
  it('searching for erroneous texts,', () => {
    HomePage.SearchBadWord()

  })
  it('erasing the content', () => {
    HomePage.CleanInput()
  })
})



