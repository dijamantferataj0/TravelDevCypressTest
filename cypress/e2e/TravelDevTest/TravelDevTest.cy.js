import { LogIn, OldSSOLogin } from "../../ExportMethods/login-utils"

describe('TravelTest', () => 
{
    beforeEach(() =>
    {
        OldSSOLogin()
    })
    
    it("SearchPrishtinaToTirana", () => 
    {
        cy.get("#from").type("Prishtin")            
        cy.contains("Prishtinë, Kosovë").click()
        cy.get("#to").type("Tiran")
        cy.contains("Tiranë, Shqipëri").click()
        cy.pause()
        cy.get("button.bg-primary[type='submit']").click()
    })
})