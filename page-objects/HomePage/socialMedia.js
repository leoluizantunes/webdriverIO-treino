import { expects } from 'chai'

    class SocialMedia {

        //assinatura

        get newsletter(){
            return $('//*[@id="newsletter-input"]')
        }

        get submitNews(){
            return $('//*[@class="form-group"]/button')
        }

        //midias digitais

        get facebook(){
            return $('//*[@class="facebook"]/a')
        }

        get twitter(){
            return $('//*[@class="twitter"]/a')
        }

        get youTube(){
            return $('//*[@class="youtube"]/a')
        }

        get googlePlus(){
            return $('//*[@class="google-plus"]/a')
        }
    }
export default new SocialMedia ()