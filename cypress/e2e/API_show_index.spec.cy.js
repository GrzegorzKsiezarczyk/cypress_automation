/// <reference types="Cypress" />

describe('Show index test',() => {
    it('Index-code 200', () => {        
        cy.request({
            method : 'GET',
            url : ' https://api.tvmaze.com/shows?page=260',
            headers: {}
        }).then((res)=>{
            expect(res.status).to.eq(200)
            console.log(res.body)
            assert.equal(res.status, 200)
            expect(res.body).to.not.be.null
            console.log(res)
            expect(res.body).to.be.a('array')
            expect({ name: 'Next Level Chef' }).to.eql({ name: 'Next Level Chef' })
            expect({ id: '65186' }).to.eql({ id: '65186' })
        })
    })

    it('Index-code 404', () => {
        cy.request({
            method : 'GET',
            url : 'https://api.tvmaze.com/shows?page=261',
            failOnStatusCode: false,
            headers: {}
        }).then((res)=>{
            expect(res.status).to.eq(404)
            expect(res.body).to.have.length(0)

        })    
    })  
})