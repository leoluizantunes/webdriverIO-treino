import { expect } from 'chai'

    class MyAccount {

        get historyDetails (){
            return $('//*[@class="myaccount-link-list"]/li[1]/a/span')
        }

        get credit (){
            return $('//*[@class="myaccount-link-list"]/li[2]/a/span')
        }

        get adresses (){
            return $('//*[@class="myaccount-link-list"]/li[3]/a/span')
        }

        get information (){
            return $('//*[@class="myaccount-link-list"]/li[4]/a/span')
        }
        
        // LISTA DE DESEJOS 

        get wishList(){
            return $('//*[@class="lnk_wishlist"]/a/span')
        }

        get minhaConta(){
            return $('/html/head/title["My account - My Store"]')
        }

       
    }

export default new MyAccount ()