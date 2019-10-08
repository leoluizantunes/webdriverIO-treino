import { expect } from 'chai'

    class Footer {
        
        // categorias do footer

        get footerCategories(){
            return $('//*[@class="tree dynamized"]/li[@class="last"]/a')
        }

        // informação

        get footerSpecials(){
            return $('//*[@class="toggle-footer"]/li[1]/a')
        }

        get footerNewProducts(){
            return $('//*[@class="toggle-footer"]/li[2]/a')
        }

        get footerBestSellers(){
            return $('//*[@class="toggle-footer"]/li[3]/a')
        }

        get footerOurStores(){
            return $('//*[@class="toggle-footer"]/li[4]/a')
        }

        get footerContactUs(){
            return $('//*[@class="toggle-footer"]/li[5]/a')
        }

        get footerTerms(){
            return $('//*[@class="toggle-footer"]/li[6]/a')
        }

        get footerAboutUs(){
            return $('//*[@class="toggle-footer"]/li[7]/a')
        }

        get footerSitemap(){
            return $('//*[@class="toggle-footer"]/li[8]/a')
        }

        // My Account

        get myOrders(){
            return $('//*[@class="bullet"]/li[1]/a')
        }

        get myCreditSlips(){
            return $('//*[@class="bullet"]/li[2]/a')
        }

        get myAdresses(){
            return $('//*[@class="bullet"]/li[3]/a')
        }

        get myPersonalInfo(){
            return $('//*[@class="bullet"]/li[4]/a')
        }

    }
export default new Footer ()