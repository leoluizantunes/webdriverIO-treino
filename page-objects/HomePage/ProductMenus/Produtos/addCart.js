import { expect } from 'chai'

    class AddCart{

        //adicionar ao carrinho 

        get addToCartOne() {
            return $('//*[@id="homefeatured"]/li[1]/div/div[2]/div[2]/a[@data-id-product="1"]/span')
        }

        get addToCartTwo() {
            return $('')
        }

        get addToCartThree() {
            return $('')
        }

        get addToCartFour() {
            return $('')
        }

        get addToCartFive() {
            return $('')
        }

        get addToCartSix() {
            return $('')
        }

        get addToCartSeven() {
            return $('')
        }

        get procederCarrinho(){
            return $('//*[@title="Proceed to checkout"]/span')
        }

    }
export default new AddCart ()