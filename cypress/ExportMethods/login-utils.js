export const PortaLogin = () => 
{
    cy.fixture("MyData.json").then((MyData)=>
    {   
        cy.visit(MyData.baseUrl)
        cy.title().should("eq", MyData.pageTitle)
        cy.location("protocol").should("eq", "https:")
        cy.get("button").contains("Kyçu").click()
        cy.get("#email").type(MyData.email)
        cy.get(".btn-primary").click()
        cy.get("#password").type(MyData.password)
        cy.get(".btn-primary").should("be.visible").click()
        cy.get("#from").should("be.visible")
    })
}

export const OldSSOLogin = () => 
{
    cy.fixture("MyData.json").then((MyData) =>
    {
        cy.visit("travel.gjirafa.com")
        cy.get("button").contains("Kyçu").click()
        cy.pause()
        cy.GetIframeBody("#ssoPopup_iframe").should("be.visible")
        cy.GetIframeBody("#ssoPopup_iframe").within(() => 
        {
            cy.get("#Username").type(MyData.email)
            cy.get("#Password").type(MyData.password)
            cy.get("#event-btn").click()
        });
    })
    
}