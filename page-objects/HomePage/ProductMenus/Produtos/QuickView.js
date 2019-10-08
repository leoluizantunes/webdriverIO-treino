import { expect } from 'chai'

    class QuickView {

        //quick view

        get quickOne (){
            return $('//*[@class="product_list grid row homefeatured tab-pane active"]/li[1]/div/div[1]/div/a[2]/span')
        }

        get quickTwo (){
            return $('//*[@class="product_list grid row homefeatured tab-pane active"]/li[2]/div/div[1]/div/a[2]/span')
        }

        get quickThree (){
            return $('//*[@class="product_list grid row homefeatured tab-pane active"]/li[3]/div/div[1]/div/a[2]/span')
        }

        get quickFour (){
            return $('//*[@class="product_list grid row homefeatured tab-pane active"]/li[4]/div/div[1]/div/a[2]/span')
        }

        get quickFive (){
            return $('//*[@class="product_list grid row homefeatured tab-pane active"]/li[5]/div/div[1]/div/a[2]/span')
        }

        get quickSix (){
            return $('//*[@class="product_list grid row homefeatured tab-pane active"]/li[6]/div/div[1]/div/a[2]/span')
        }

        get quickSeven (){
            return $('//*[@class="product_list grid row homefeatured tab-pane active"]/li[7]/div/div[1]/div/a[2]/span')
        }

    }
export default new QuickView ()