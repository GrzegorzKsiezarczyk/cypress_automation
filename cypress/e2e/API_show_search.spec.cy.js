/// <reference types="Cypress" />

describe('Search test',() => {
    it('Search-code 200', () => {        
        cy.request({
            method : 'GET',
            url : 'https://api.tvmaze.com/search/shows?q=girls',
            headers: {}
        }).then((res)=>{
            expect(res.status).to.eq(200)
            console.log(res.body)
            assert.equal(res.status, 200)
            expect(res.body).to.not.be.null
            console.log(res)
            expect(res.body).to.be.a('array')
            expect({ name: 'Girls' }).to.eql({ name: 'Girls' })
            expect({ id: '139' }).to.eql({ id: '139' })
        })
    })

    it('Search-code 400', () => {
        cy.request({
            method : 'GET',
            url : 'https://api.tvmaze.com/search/shows?qq=girls',
            failOnStatusCode: false,
            headers: {}
        }).then((res)=>{
            expect(res.status).to.eq(400)
            expect({ name: 'Bad Request' }).to.eql({ name: 'Bad Request' })
        })    
    })  
    it('20c all-try HTTP 429', () => {
        cy.request({ method : 'GET', url : 'https://api.tvmaze.com/search/shows?q=girls',headers: {} })
        cy.request({ method : 'GET', url : 'https://api.tvmaze.com/search/shows?q=girls',headers: {} })
        cy.request({ method : 'GET', url : 'https://api.tvmaze.com/search/shows?q=girls',headers: {} })
        cy.request({ method : 'GET', url : 'https://api.tvmaze.com/search/shows?q=girls',headers: {} })
        cy.request({ method : 'GET', url : 'https://api.tvmaze.com/search/shows?q=girls',headers: {} })
        cy.request({ method : 'GET', url : 'https://api.tvmaze.com/search/shows?q=girls',headers: {} })
        cy.request({ method : 'GET', url : 'https://api.tvmaze.com/search/shows?q=girls',headers: {} })
        cy.request({ method : 'GET', url : 'https://api.tvmaze.com/search/shows?q=girls',headers: {} })
        cy.request({ method : 'GET', url : 'https://api.tvmaze.com/search/shows?q=girls',headers: {} })
        cy.request({ method : 'GET', url : 'https://api.tvmaze.com/search/shows?q=girls',headers: {} })
        cy.request({ method : 'GET', url : 'https://api.tvmaze.com/search/shows?q=girls',headers: {} })
        cy.request({ method : 'GET', url : 'https://api.tvmaze.com/search/shows?q=girls',headers: {} })
        cy.request({ method : 'GET', url : 'https://api.tvmaze.com/search/shows?q=girls',headers: {} })
        cy.request({ method : 'GET', url : 'https://api.tvmaze.com/search/shows?q=girls',headers: {} })
        cy.request({ method : 'GET', url : 'https://api.tvmaze.com/search/shows?q=girls',headers: {} })
        cy.request({ method : 'GET', url : 'https://api.tvmaze.com/search/shows?q=girls',headers: {} })
        cy.request({ method : 'GET', url : 'https://api.tvmaze.com/search/shows?q=girls',headers: {} })
        cy.request({ method : 'GET', url : 'https://api.tvmaze.com/search/shows?q=girls',headers: {} })
        cy.request({ method : 'GET', url : 'https://api.tvmaze.com/search/shows?q=girls',headers: {} })
        cy.request({ method : 'GET', url : 'https://api.tvmaze.com/search/shows?q=girls',headers: {} })
        cy.request({ method : 'GET', url : 'https://api.tvmaze.com/search/shows?q=girls',headers: {} })
        cy.request({ method : 'GET', url : 'https://api.tvmaze.com/search/shows?q=girls',headers: {} })


    }) 
})