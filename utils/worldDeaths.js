const request= require('postman-request')
const cheerio = require('cheerio')
const UserAgent = require('user-agents') ;

 

const userAgent = new UserAgent();
const StringRandomUserAgent= userAgent.toString()


const worldDeaths= (country)=>{

    return new Promise ((resolve,reject)=>{


            const url='https://www.worldometers.info/coronavirus/'
        
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
        
        
     


    })



    

}

module.exports=worldDeaths