import { PortaLogin } from "../../ExportMethods/login-utils"

describe("TravelProdTest", () => 
{
    before(() =>
    {
        cy.fixture("MyData.json").then((MyData) =>
        {
            cy.visit(MyData.baseUrl)
        })
        PortaLogin()
    })

    beforeEach(()=>
    {
        cy.on("uncaught:exception", (e, runnable) => 
        {
            console.log("error", e);
            console.log("runnable", runnable);
            console.log("error", e.message);
            return false;
        });

    })
    
    it("SearchPrishtinaToTirana", () => 
    {
        cy.get("#from").clear().type("Prishtin")            
        cy.contains("Prishtinë, Kosovë").click()
        cy.get("#to").clear().type("Tiran")
        cy.contains("Tiranë, Shqipëri").click()
        cy.get("div.transition-colors>div>div").eq(0).click()
        cy.get("div.react-datepicker__day[aria-disabled='false']").eq(5).click()
        cy.get("div.transition-colors>div>div").eq(1).click()
        cy.get("div.react-datepicker__day[aria-disabled='false']").eq(10).click()
        cy.get("button.bg-primary[type='submit']").click()
    })


    it("SelectDepartureAndReturnTrips", () =>
    {

        cy.get("button.bg-primary[type='button']").contains("Zgjedh").click()
        cy.get("button.bg-primary[type='button']").contains("Blej biletën").click()

    })


    it("ReserveTicket", () =>
    {
        cy.fixture("MyData.json").then((MyData) =>
        {
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