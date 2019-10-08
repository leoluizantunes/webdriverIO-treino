import { expect } from 'chai'

class Tshirts {

    //categoria t-shirts

    get tShirts(){
        return $('//*[@class="sf-menu clearfix menu-content sf-js-enabled sf-arrows"]/li[3]/a[@title="T-shirts"]')
    }

}

export default new Tshirts ()