import { expect } from 'chai'

class Menuwomen {

    //categoria principal

    get women(){
        return $('//a[@title="Women"]')
    }

    //categoria secundaria

    get tops() {
        return $('//a[@title="Tops"]')        
    }

    get womenDresses() {
        return $('//*[@class="submenu-container clearfix first-in-line-xs"]/li[2]/a[@title="Dresses"]')
    }

    //categoria terciaria

    get tShirtTerc() {
        return $('//*[@class="submenu-container clearfix first-in-line-xs"]/li/ul/li/a[@title="T-shirts"]')
    }

    get blouses() {
        return $('//*[@class="submenu-container clearfix first-in-line-xs"]/li/ul/li[2]/a[@title="Blouses"]')
    }

    get casualDresses() {
        return $('//*[@class="sf-menu clearfix menu-content sf-js-enabled sf-arrows"]/li[1]/ul/li[2]/ul/li/a[@title="Casual Dresses"]')
    }

    get eveningDresses() {
        return $('//*[@class="sf-menu clearfix menu-content sf-js-enabled sf-arrows"]/li[1]/ul/li[2]/ul/li/a[@title="Evening Dresses"]')
    }

    get summerDresses() {
        return $('//*[@class="sf-menu clearfix menu-content sf-js-enabled sf-arrows"]/li[1]/ul/li[2]/ul/li/a[@title="Summer Dresses"]')
    }

}

export default new Menuwomen ()