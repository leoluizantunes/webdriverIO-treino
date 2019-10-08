import { expect } from "chai"
import addCart from "../page-objects/HomePage/ProductMenus/Produtos/addCart"
import cart from "../page-objects/HomePage/cart"

    describe (" uma venda qualquer ", () => {
        browser.url("http://automationpractice.com/index.php")

        it =('bla', () => {
            addCart.addToCartOne.click()
            addCart.procederCarrinho.click()
            if (cart.addMais.click("value") < 3) {
                    cart.addMais.click()
            }
            cart.procederCheck.click()
            cart.comenteAbout.setValue("TESTE 123 TESTE")
            cart.procederAdress.click()
            cart.aceitoTermos.click()
            cart.procederTermos.click()

            
            
        })
    })