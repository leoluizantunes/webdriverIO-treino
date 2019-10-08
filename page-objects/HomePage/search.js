import { expect } from 'chai'

class Search  {

    get searchString (){
        return $('#search_query_top')
    }

    get searchButton (){
        return $('.button-search')
    }

}
export default new Search ()