import { expect } from 'chai'

    class More {

        //visualizar mais sobre os produtos

        get moreOne (){
            return $('//*[@class="product_list grid row homefeatured tab-pane active"]/li[1]/div/div[2]/div[2]/a[2]/span')
        }

        get moreTwo (){
            return $('//*[@class="product_list grid row homefeatured tab-pane active"]/li[2]/div/div[2]/div[2]/a[2]/span')
        }

        get moreThree (){
            return $('//*[@class="product_list grid row homefeatured tab-pane active"]/li[3]/div/div[2]/div[2]/a[2]/span')
        }

        get moreFour (){
            return $('//*[@class="product_list grid row homefeatured tab-pane active"]/li[4]/div/div[2]/div[2]/a[2]/span')
        }

        get moreFive (){
            return $('//*[@class="product_list grid row homefeatured tab-pane active"]/li[5]/div/div[2]/div[2]/a[2]/span')
        }

        get moreSix (){
            return $('//*[@class="product_list grid row homefeatured tab-pane active"]/li[6]/div/div[2]/div[2]/a[2]/span')
        }

        get moreSeven (){
            return $('//*[@class="product_list grid row homefeatured tab-pane active"]/li[7]/div/div[2]/div[2]/a[2]/span')
        }


    }
export default new More ()