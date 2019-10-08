import { expect } from 'chai'

    class ProdMenu {
        
        //menu secundário para informar os mais populares ou mais vendidos

        get popular(){
            return $(".homefeatured")
        } 

        get bestSellers(){
            return $(".blockbestsellers")
        }

    }
export default new ProdMenu ()