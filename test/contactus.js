import { expect } from 'chai'

import userInformation from '../page-objects/HomePage/userInformation'
 

describe("Informações de Usuário",  () => {

    it('Contact-us', () => {
        browser.url("http://automationpractice.com/index.php")

        userInformation.contactUs.click()
        userInformation.servico.selectByVisibleText("Customer service")
        userInformation.subjectOne.click()        
        userInformation.email.setValue('leonardo.antunes@envolti.com.br')
        userInformation.idOrder.setValue('teste')
        userInformation.mensagem.setValue('Teste um dois três')
        userInformation.submitMensagem.click()
        userInformation.sucessMensagem.waitForExist()
        
        
    })

    
})