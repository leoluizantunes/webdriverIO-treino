import { expect } from "chai"

    class Announcement {

        //anuncios de promoção

        get promoOne(){
            return $('//*[@class="center_column col-xs-12 col-sm-12"]/div[2]/ul/li[1]/a/img[@class="item-img"]')
        }

        get promoTwo(){
            return $('//*[@class="center_column col-xs-12 col-sm-12"]/div[2]/ul/li[2]/a/img[@class="item-img"]')
        }
    }
export default new Announcement ()