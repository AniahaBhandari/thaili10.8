describe('mobile topup', () => {
  it('wallet', () => {
    var uname = '9847659504'
    cy.login(uname,'Anisha@12')
    cy.visit('/Payment/MobileTopUp')
    cy.get("#MobileNo").type('9847659504')
    cy.wait(5000)
    cy.get("#PaymentType").select("Nepal Investment Bank Ltd")
    cy.wait(2000)
    cy.get("#Amount").type(10)
    cy.get("#confirmButton").click()
    cy.get("#btnConfirm").click()
    cy.get("input[type='password']").eq(0).type('1234')
    cy.get("#btnConfirmmodal").click()
    cy.get(".user__img").click()
    cy.get(".thaili__dropdown").contains('Statement').click()

  })
})
