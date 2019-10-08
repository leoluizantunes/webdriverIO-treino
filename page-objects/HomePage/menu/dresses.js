import { expect } from 'chai'

class Dresses {

    //categoria principal

    get dresses() {
        return $('//*[@class="sf-menu clearfix menu-content sf-js-enabled sf-arrows"]/li[2]/a[@title="Dresses"]')
    }

    //categoria secundaria

    get casualDresses(){
    return $('//*[@class="submenu-container clearfix first-in-line-xs"]/li/a[@title="Casual Dresses"]')
    }

    get eveningDresses(){
        return $('//*[@class="submenu-container clearfix first-in-line-xs"]/li/a[@title="Evening Dresses"]')
    }

    get summerDresses(){
        return $('//*[@class="submenu-container clearfix first-in-line-xs"]/li/a[@title="Summer Dresses"]')
    }

}

export default new Dresses ()