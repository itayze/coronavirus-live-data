const request= require('postman-request')
const cheerio = require('cheerio')
const UserAgent = require('user-agents') ;
const countryName= require('./countryName')
 

const userAgent = new UserAgent();
const StringRandomUserAgent= userAgent.toString()


const totalDeaths= (country)=>{

    return new Promise ((resolve,reject)=>{

        countryName(country).then((countryNameToFetch)=>{

            const url='https://www.worldometers.info/coronavirus/country/'+countryNameToFetch+'/'
        
            request({url,json:true,headers:{StringRandomUserAgent}},(error,response)=>{
        
                if(error)
                {
                    reject(new Error (error))
                }
                else
                {   
                    const $= cheerio.load(response.body)
                    // const selector='body > main > div.dashboard > div.corona-sick > div > div.corona-xl.corona-bold.corona-sickmiddle'
                    const selector='#maincounter-wrap > div > span'
                    const numOfCases= $(selector).eq(1).text()
                    
                    resolve(numOfCases)
                }
        
            })
        
        
        }).catch((error)=>{
            console.log('there was an error: '+error)
        })


    })



    

}

module.exports=totalDeaths