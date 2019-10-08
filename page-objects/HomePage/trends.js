import { expect } from 'chai'

    class Trends {

        //informações like trending topics

        get trendOne (){
            return $('//*[@id="htmlcontent_home"]/ul/li[1]/a/img')
        }

        get trendTwo (){
            return $('//*[@id="htmlcontent_home"]/ul/li[2]/a/img')
        }

        get trendThree (){
            return $('//*[@id="htmlcontent_home"]/ul/li[3]/a/img')
        }

        get trendFour (){
            return $('//*[@id="htmlcontent_home"]/ul/li[4]/a/img')
        }

        get trendFive (){
            return $('//*[@id="htmlcontent_home"]/ul/li[5]/a/img')
        }


    }

export default new Trends ()