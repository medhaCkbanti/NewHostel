import SummaryApi from "../Common";


const fetchCategoryWiseProduct = async(category) => {
     
    const response = await fetch(SummaryApi.categoryWiseProdut.url,{

         method : SummaryApi.categoryWiseProdut.method ,
         headers : {

             "content-type" : "application/json"
         },

         body : JSON.stringify({

             category : category
         })
    })

    const dataResponse = await response.json() ;
    return dataResponse
};

export default fetchCategoryWiseProduct;