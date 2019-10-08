import { expect } from 'chai'

    class Create {

        get emailCreate(){
            return $('#email_create')
        }

        get submitCreate(){
            return $('//*[@id="SubmitCreate"]/span')
        }

        get titleMr(){
            return $('#id_gender1')
        }

        get titleMs(){
            return $('#id_gender2')
        }

        get customerFirstName(){
            return $('#customer_firstname')
        }

        get customerLastName(){
            return $('#customer_lastname')
        }

        get emailCustomer(){
            return $('#email')
        }

        get password(){
            return $('#passwd')
        }

        get birthDay(){
            return $('#days')
        }

        get birthMonth(){
            return $('#months')
        }
        
        get birthYear(){
            return $('#years')
        }

        get signForNews(){
            return $('//*[@class="checkbox"][1]/label')
        }

        get specialOffers(){
            return $('//*[@class="checkbox"][2]/label')
        }

        get adressFirstName(){
            return $('#firstname')
        }

        get adressLastName(){
            return $('#lastname')
        }

        get company(){
            return $('#company')
        }

        get adressOne(){
            return $('#address1')
        }

        get adressTwo(){
            return $('#address2')
        }

        get adressCity(){
            return $('#city')
        }

        get adressState(){
            return $('#id_state')
        }

        get adressPostcode(){
            return $('#postcode')
        }

        get adressCountry(){
            return $('#id_country')
        }

        get adressOther(){
            return $('#other')
        }

        get adressPhone(){
            return $('#phone')
        }

        get adressMobilePhone(){
            return $('#phone_mobile')
        }

        get adressAlias(){
            return $('#alias')
        }

        get createButton(){
            return $('//*[@id="submitAccount"]/span')
        }

       get validaCriacao(){
           return $('/html/head/title["My account - My Store"]')
       }

       
    }

export default new Create ()