import { expect } from 'chai'

    class WishList{

        get nameWishList(){
            return $('#name')
        }      

        get submitWishList(){
            return $('//*[@id="submitWishlist"]/span')
        }
    }   

    export default new WishList ()