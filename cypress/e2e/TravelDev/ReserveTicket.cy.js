import { PortaLogin } from "../../ExportMethods/login-utils"

describe("TravelProdTest", () => 
{
    before(() =>
    {
        cy.fixture("MyData.json").then((MyData) =>
        {
            cy.visit(MyData.baseDevUrl)
        })
        PortaLogin()
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

        cy.get("#from").clear().type("Prishtin")            
        cy.contains("Prishtinë, Kosovë").click()
        cy.get("#to").clear().type("Tiran")
        cy.contains("Tiranë, Shqipëri").click()
        cy.get("button.bg-primary[type='submit']").click()
    })


    it("ReserveTicket", () =>
    {
        cy.fixture("MyData.json").then((MyData) =>
        {
            cy.get("button.bg-primary[type='button']").contains("Blej biletën").click()
            cy.get("input[name='phoneNumber']").clear().type(MyData.phoneNumber)
            cy.get("button.bg-primary[type='button']").contains("Vazhdo").click()
            cy.get("button[type='submit']").click()
            cy.location("protocol").should("eq", "https:")
        })

    })

    after(() => 
    {
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage()
    })
})