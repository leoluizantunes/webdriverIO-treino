import { expect } from 'chai'

    class Login {

        get loginSignIn (){
            return $('.login')
        }
    
        get loginEmail(){
            return $('#email')
        }

        get loginPass(){
            return $('#passwd')
        }

        get loginSubmit(){
            return $('//*[@id="SubmitLogin"]/span')
        }

        get logar(){
            return $('/html/head/title["Login - My Store"]')
        }

    
    
    }

    export default new Login ()