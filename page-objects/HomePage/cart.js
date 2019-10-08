import { expect } from 'chai'

class Cart  {

    //visualizar o carrinho

    get cartView (){
        return $('.shopping_cart')
    }

    get addMais(){
        return $('.icon-plus')
    }

    get procederCheck(){
        return $('//*[@class="cart_navigation clearfix"]/a[@title="Proceed to checkout"]/span')
    }

    get comenteAbout(){
        return $('.form-control')
    }

    get procederAdress(){
        return $('.button btn btn-default button-medium')
    }

    get aceitoTermos(){
        return $('#cgv')
    }

    get procederTermos(){
        return $('//*[@class="button btn btn-default standard-checkout button-medium"]/span')
    }
}

export default new Cart ()