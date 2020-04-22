const lookup = require('country-code-lookup')


const countryName= (country)=>{
    
    return new Promise((resolve,reject)=>{
         country= country.trim()
          
        if(country.length>3) //in case of country name
        {
          
            const selectedCountry= lookup.countries.find((curCountry)=>curCountry.country.toLowerCase()===country.toString().toLowerCase())

            if(!selectedCountry)
            {
                reject(new Error("the country name is invalid"))

            }
            else
            {
                resolve (country.replace(" ","-").replace(" ","-")) //2 calls of replace in case of 3 words country name
            }
           

          
        }
        else
        if(country.includes('us')) //in case of USA
       {
           resolve('us') 
       }
       else if(country.toLowerCase().includes('united kingdom') || country.toLowerCase().includes('united-kingdom') ||  country.toLowerCase().includes('unitedkingdom') ||  country.toLowerCase().includes('uk') ) //in case of uk
       {
           resolve ('uk')
       }
       else  //cases of ISO/Internet 
       {
        
        if(countryObj=lookup.byIso(country))
        {
            resolve (countryObj.country.trim().toLowerCase().replace(" ","-"))
        }
        else if(countryObj=lookup.byInternet(country))
        {
            resolve (countryObj.country.trim().toLowerCase().replace(" ","-"))
        }
       
        else
        reject(new Error("failed looking for that country"))
        
       
       }
       
       
       })  
}
 

  

module.exports=countryName