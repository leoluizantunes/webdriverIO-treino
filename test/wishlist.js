import { expect } from 'chai'
import userInformation from '../page-objects/HomePage/userInformation'
import myaccount from '../page-objects/MyAccount/myaccount'
import login from '../page-objects/MyAccount/login'
import wishlist from '../page-objects/MyAccount/wishlist'

    describe("WishList", () =>{

        it('Lista de desejos', () => {

            browser.url("http://automationpractice.com/index.php")

            //clicar em signin
            userInformation.signIn.click()

            //logar
            
            login.logar.isExisting()
            login.loginEmail.setValue("leoluizantunes@gmail.com")
            
            login.loginPass.setValue("123456")
            login.loginSubmit.click()
            
            //minha conta

            myaccount.minhaConta.isExisting()
            myaccount.wishList.click()

            //lista de desejos

            wishlist.nameWishList.setValue('teste')
            wishlist.submitWishList.click()



            

        })
    })