import { expect } from 'chai'


class Slider  {

    //setas slider

    get nextSlider (){
        return $('.bx-prev')
    }

    get prevSlider (){
        return $('.bx-next')
    }

    //informações botão shopnow do slider

    get buttonSliderOne(){
        return $('//*[@id="homeslider"]/li[2]/div[@class="homeslider-description"]/p[2]/button[@class="btn btn-default"]')
    }
    
    get buttonSliderTwo(){
        return $('//*[@id="homeslider"]/li[3]/div[@class="homeslider-description"]/p[2]/button[@class="btn btn-default"]')
    }
    
    get buttonSliderThree(){
        return $('//*[@id="homeslider"]/li[4]/div[@class="homeslider-description"]/p[2]/button[@class="btn btn-default"]')
    }


}

export default new Slider ()