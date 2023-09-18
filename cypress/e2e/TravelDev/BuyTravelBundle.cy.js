import { PortaLogin } from "../../ExportMethods/login-utils";

describe("TestBundles", () =>
{
    before(() =>
    {
        cy.fixture("MyData.json").then((MyData) =>
        {
            cy.visit(MyData.baseDevUrl)
        })
        PortaLogin()
        cy.visit("/offers")
    })

    beforeEach(()=>
    {
        cy.on("uncaught:exception", (e, runnable) => 
        {
            console.log("error", e);
            console.log("runnable", runnable);
            console.log("error", e.message);
            return false;
        })
    })


    it("ReserveBundle", () => 
    {
        cy.get("div>p").eq(0).click()
        cy.get("div>span>a").click()
         cy.fixture("MyData.json").then((MyData) =>
        {
            cy.get("input[name='clientNames[0].phoneNumber.value']").clear().type(MyData.phoneNumber)
            cy.get("button.bg-primary[type='button']").contains("Vazhdo").click()
            cy.get("button[type='submit']>span").click()
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