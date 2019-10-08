import { expect } from 'chai'
import createAccount from '../page-objects/HomePage/createAccount'
import userInformation from '../page-objects/HomePage/userInformation'

describe("Sign In",  () => {


    it('Inscrever-se', () => { 

        browser.url("http://automationpractice.com/index.php")

        //clicar em signin
        userInformation.signIn.click()
        
        //clicar em criar
        createAccount.emailCreate.setValue('leonardo.antunes@envolti.com.br')
        createAccount.submitCreate.click()

        //preencher informações de criação
        createAccount.titleMr.click()
        createAccount.customerFirstName.setValue("Tester")
        createAccount.customerLastName.setValue("da Silva")
        createAccount.emailCustomer.setValue("teste@teste.com.br")
        createAccount.password.setValue("123456")
        createAccount.birthDay.selectByIndex(2)
        createAccount.birthMonth.selectByIndex(11)
        createAccount.birthYear.selectByAttribute("value","1994")
        createAccount.signForNews.click()
        createAccount.specialOffers.click()
        createAccount.adressFirstName.setValue("Tester")
        createAccount.adressLastName.setValue("da Silva")
        createAccount.company.setValue("Comp do Teste")
        createAccount.adressOne.setValue("Rua das Zueiras")
        createAccount.adressTwo.setValue("Ruazinha do teste")
        createAccount.adressCity.setValue("CIDADEZINHA")
        createAccount.adressState.selectByVisibleText("Florida")
        createAccount.adressPostcode.setValue("125987")
        createAccount.adressCountry.selectByVisibleText("United States")
        createAccount.adressOther.setValue("LOREM IPSUM")
        createAccount.adressPhone.setValue("992450211")
        createAccount.adressMobilePhone.setValue("33305573")
        createAccount.adressAlias.setValue("não sei o que dizer")
        createAccount.createButton.click()
        createAccount.validaCriacao.isExisting()
    })

})