import home_page from '../pages/home_page'
import program_card from '../pages/program_card'
describe('Add program to favorite', () => {
  const HomePage = new home_page
  const ProgramCard = new program_card

beforeEach(() => {});
afterEach(() => {});
  it('Open program card,', () => {
    cy.visit('https://clearcodehq.github.io/qa-intern-test/#/home')

    HomePage.firstprogram()

  })
  it('add to favorite,', () => {
    ProgramCard.addtofavorite()
    ProgramCard.buttonback()

  })
  it('check table', () => {
   HomePage.checkfavoriteprogram()
  })
})
