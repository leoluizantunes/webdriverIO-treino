import { expect } from 'chai'

    class Produtos {
        
        // imagens dos produtos

        get prodImgOne(){
            return $('//*[@class="product_list grid row homefeatured tab-pane active"]/li[1]/div/div/div/a/img')
        }

        get prodImgTwo(){
            return $('//*[@class="product_list grid row homefeatured tab-pane active"]/li[2]/div/div/div/a/img')
        }

        get prodImgThree(){
            return $('//*[@class="product_list grid row homefeatured tab-pane active"]/li[3]/div/div/div/a/img')
        }

        get prodImgFour(){
            return $('//*[@class="product_list grid row homefeatured tab-pane active"]/li[4]/div/div/div/a/img')
        }

        get prodImgFive(){
            return $('//*[@class="product_list grid row homefeatured tab-pane active"]/li[5]/div/div/div/a/img')
        }

        get prodImgSix(){
            return $('//*[@class="product_list grid row homefeatured tab-pane active"]/li[6]/div/div/div/a/img')
        }

        get prodImgSeven(){
            return $('//*[@class="product_list grid row homefeatured tab-pane active"]/li[7]/div/div/div/a/img')
        }

    }
export default new Produtos ()