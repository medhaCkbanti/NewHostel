

const imagetToBase64 = async (image) =>{
    
    const reader = new FileReader()
    reader.readAsDataURL(image) 

    const data = new Promise((resolve,reject) =>{

         reader.onload = () => resolve(reader.result) ;
         reader.onerror = () => reject(reader.error)
    })

    return data
 
}

export default imagetToBase64 ;