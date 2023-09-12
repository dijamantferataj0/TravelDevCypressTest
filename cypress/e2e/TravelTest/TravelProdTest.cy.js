import { OldSSOLogin } from "../../ExportMethods/login-utils"

describe("TravelProdTest", () => 
{
    before(() =>
    {
        OldSSOLogin()
    })
    
    it("SearchPrishtinaToTirana", () => 
    {
        cy.on("uncaught:exception", (e, runnable) => 
        {
            console.log("error", e);
            console.log("runnable", runnable);
            console.log("error", e.message);
            return false;
        });

        cy.get("#from").type("Prishtin")            
        cy.contains("Prishtinë, Kosovë").click()
        cy.get("#to").type("Tiran")
        cy.contains("Tiranë, Shqipëri").click()
        cy.get("button.bg-primary[type='submit']").click()
    })
})