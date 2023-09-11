describe('TravelTest', () => 
{
    it('LoginPorta', () => 
        {
            cy.visit("travel-dev.gjirafa.com")
            cy.title().should("eq", "Kërko & Rezervo biletat e autobusit në Kosovë Maqedoni te veriut dhe Shqipëri | GjirafaTravel")
            cy.location("protocol").should("eq", "https:")
            cy.get("button").contains("Kyçu").click()
            cy.get("#email").type("test.acc1597532486@gmail.com")
            cy.get(".btn-primary").click()
            cy.get("#password").type("passistakeN*1")
            cy.get(".btn-primary").should("be.visible").click()
            cy.get("#from", { timeout: 8000 }).as("loggedIn");
        })
    
    it("SearchPrishtinaToTirana", () => 
        {
            cy.get("@loggedIn").type("Prishtin")
            cy.contains("Prishtinë, Kosovë").click()
            cy.get("#to").type("Tiran")
            cy.contains("Tiranë, Shqipëri").click()
        })
})