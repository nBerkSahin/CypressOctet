require('cypress-plugin-tab');
import 'cypress-iframe';


describe('Octet Case', () => {
  it('Login Scenario', () => {
    cy.viewport(2000, 1900)
    cy.visit('https://testotomasyon.octet.com.tr/giris')

    cy.get('[data-testid="formItem-email"]').type("virkiyokku@gufum.com")
    cy.get('[data-testid="formItem-password"]').type("Otomasyon123")
    cy.get('[data-testid="form-submit"]').click()
    cy.get('.input-0').type("123456")
    cy.get('.mt-16 > .button').click()

    cy.wait(1000)
    cy.visit('https://testotomasyon.octet.com.tr/tanimlamalar/pos-yonetimi/pos-tanimlama')
    cy.get('.row > .button').click()

    cy.get('[data-testid="formItem-bankId"] > .row').click()

    //cy.get('[data-value="78fb0454-2f26-4b64-994b-03920782af37"]').click()
    cy.get('[data-value="55ed6b68-412a-43ba-9437-77cbf3e823c2"]').click()
    cy.function1()
    cy.readFile('cypress/fixtures/apiname.txt').then((data) => {
      cy.get('[data-testid="formItem-name"]').type(data)

      cy.get('[data-testid="formItem-isActive"] > .row').click()
      cy.get('[data-value="true"]').click()

      cy.get('[data-testid="formItem-posModeType"] > .row').click()
      cy.wait(1000)

      cy.get('[data-testid="formItem-posConnectionParameters.4.value"]').type(data)

      cy.get('[data-value="2"]').click()
      cy.get('[data-testid="formItem-posConnectionParameters.0.value"]').type(data)
      cy.get('[data-testid="formItem-posConnectionParameters.1.value"]').type(data)
      cy.get('[data-testid="formItem-posConnectionParameters.2.value"]').type(data)
      cy.get('[data-testid="formItem-posConnectionParameters.3.value"]').type(data)

      cy.get('[data-testid="formItem-posType"] > .row').click()
      cy.get('[data-value="1"]').click()

      cy.get('[data-testid="formItem-cardAccountType"] > .row').click()
      cy.get('[data-value="1"]').click()

      cy.get('[data-testid="formItem-pos3DType"] > .row').click()
      cy.get('[data-value="2"]').click()
      //cy.get('[data-value="1"]').click()


      cy.get('[data-testid="formItem-posInstalmentPersonal"] > .toggleButtonGroup-container > :nth-child(3)').click()
      cy.get('[data-testid="formItem-posInstalmentPersonal"] > .toggleButtonGroup-container > :nth-child(5)').click()
      cy.get('[data-testid="formItem-posInstalmentPersonal"] > .toggleButtonGroup-container > :nth-child(7)').click()
      cy.get('[data-testid="formItem-posInstalmentPersonal"] > .toggleButtonGroup-container > :nth-child(9)').click()
      cy.get('[data-testid="formItem-posInstalmentPersonal"] > .toggleButtonGroup-container > :nth-child(11)').click()
      cy.get('[data-testid="formItem-posInstalmentPersonal"] > .toggleButtonGroup-container > :nth-child(13)').click()
      cy.get('[data-testid="formItem-posInstalmentPersonal"] > .toggleButtonGroup-container > :nth-child(15)').click()
      cy.get('[data-testid="formItem-posInstalmentPersonal"] > .toggleButtonGroup-container > :nth-child(17)').click()

      cy.get('[data-testid="formItem-posInstalmentCommercial"] > .toggleButtonGroup-container > :nth-child(1)').click()
      cy.get('[data-testid="formItem-posInstalmentCommercial"] > .toggleButtonGroup-container > :nth-child(2)').click()
      cy.get('[data-testid="formItem-posInstalmentCommercial"] > .toggleButtonGroup-container > :nth-child(4)').click()
      cy.get('[data-testid="formItem-posInstalmentCommercial"] > .toggleButtonGroup-container > :nth-child(6)').click()
      cy.get('[data-testid="formItem-posInstalmentCommercial"] > .toggleButtonGroup-container > :nth-child(8)').click()
      cy.get('[data-testid="formItem-posInstalmentCommercial"] > .toggleButtonGroup-container > :nth-child(10)').click()
      cy.get('[data-testid="formItem-posInstalmentCommercial"] > .toggleButtonGroup-container > :nth-child(12)').click()
      cy.get('[data-testid="formItem-posInstalmentCommercial"] > .toggleButtonGroup-container > :nth-child(14)').click()
      cy.get('[data-testid="formItem-posInstalmentCommercial"] > .toggleButtonGroup-container > :nth-child(16)').click()
      cy.get('[data-testid="formItem-posInstalmentCommercial"] > .toggleButtonGroup-container > :nth-child(18)').click()

      cy.get('.align-items-flex-end > .button').click()

      cy.get('[data-testid="tableRow-0"] > [align="right"] > .row > [data-testid="tableRowAction-detail"]').click()

      cy.get('.tabs > :nth-child(2)').click()

      cy.get(':nth-child(1) > .module-layout > .box > .justify-content-space-between > :nth-child(2) > .row > .button').click()

      cy.get(':nth-child(1) > .gap-4 > :nth-child(1) > .input > .col > .row > [data-testid="formItem-name"]').type(data)

      cy.get('[data-testid="formItem-startDate"] > .input > .input-fieldset-container > .align-items-center > #input').click()
      const date = new Date();
      let day = date.getDate();
      let day2 = day + 7
      let ss = ".dates > :nth-child(" + day2 + ")"
      cy.get(ss).click()
      cy.wait(1000)
      cy.get('.date-picker-actions > .row > :nth-child(2) > .button').click()

      cy.get('[data-testid="formItem-defineDifferentValuesForCommercialCards"] > .slider').click()



      cy.get(':nth-child(5) > .installment-card-container > .col > :nth-child(2) > .box > .table > tbody > :nth-child(1) > :nth-child(2) > .mask-input > .mask-input-fieldset-container').type('1')
      cy.focused().tab().type("2").tab().type("3").tab().type("4").tab().type("5").tab().type("6")
        .tab().type("5").tab().type("6").tab().type("6").tab().type("6,5").tab().type("6").tab().type("8").tab().type("6").tab().type("9,5").tab().type("6").tab().type("11").tab().type("6").tab().type("12,5").tab().type("6").tab().type("9").tab().type("6").tab().type("14").tab().type("6").tab().type("15,5").tab().type("6")
        .tab().tab().tab().tab().tab().type("6").tab().type("6").tab().type("6").tab().type("6").tab().type("6").tab().type("6")

      //cy.wait(10000)
      cy.get('.align-items-flex-end > .button-is-color-primary').click()
      cy.get('[data-testid="dialogApproveAction-approve"]').click()

      cy.visit('https://testotomasyon.octet.com.tr/islemler/pos-islemleri/pos-islemleri')
      cy.get('.row > .button').click()

      cy.get('[data-testid="formItem-amount"]').type('100')

      cy.get(':nth-child(7) > .gap-8 > .row').click()
      cy.get('[data-value="55ed6b68-412a-43ba-9437-77cbf3e823c2"]').click()
      //cy.get('[data-value="78fb0454-2f26-4b64-994b-03920782af37"]').click()

      //cy.get(':nth-child(8) > .gap-8 > .row').click()
      //cy.get('[data-value="1794ebe1-1793-4b77-9ef9-38edb5787c77"]').click()
      cy.get(':nth-child(8) > .gap-8 > .row > input').type('QNB')
      cy.wait(1000)
      cy.get('.list-box-item').click()

      cy.get('[data-testid="formItem-cardNumber"]').type('5456165456165454')
      cy.get('[data-testid="formItem-cardHolderName"]').type('Test Test2')

      cy.get(':nth-child(11) > .mask-input > .mask-input-fieldset-container').type('12 30')

      cy.get(':nth-child(12) > .mask-input > .mask-input-fieldset-container').type('000')

      cy.get(':nth-child(13) > .gap-4 > :nth-child(1) > .input > .col').type(data)

      cy.get(':nth-child(14) > .row > :nth-child(1)').click()

      //cy.wait(8000)

    });
  });


})

