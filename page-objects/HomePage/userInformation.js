import { expect } from 'chai'

class Information  {

    // contato

    get contactUs (){
        return $('#contact-link')
    }

    // formulário de contato
    
    get servico() {
        return $('#id_contact')
    } 

    get email() {
        return $('#email')
    }
    
    get idOrder(){
        return $('#id_order')
    }

    get mensagem(){
        return $('#message')
    }

    get submitMensagem(){
        return $('//*[@id="submitMessage"]/span')
    }
    
    get sucessMensagem(){
        return $('//*[@id="center_column"]/p')
    }

    get subjectOne (){
        return $('//*[@value="1"]')
    }

    get subjectTwo (){
        return $('//*[@value="2"]')
    }

    get subjectThree (){
        return $('//*[@value="3"]')
    }

    // increver-se

    get signIn (){
        return $('//*[@class="header_user_info"]/a[@class="login"]')
    }

    

    

}

export default new Information ()