# Coronavirus Live Data

Coronavirus-live-data is a module for extracting the latest data regarding COVID-19 

## Installation

This module is distributed on `npm`. To add it as a dependency, run the following command:

```bash
npm install coronavirus-live-data
```


## Usage

### Retrieve data by country

the listed functions accept one argument (required) to represent the country.

State representation is supported by one of the following:

1. ISO Alpha-2 code (e.g.,IL,NL)
2. ISO Alpha-3 code (e.g.,ISR,NLD)
3. State name (e.g., Israel, Netherlands)

`totalCases(country)` returns the updated number of confirmed cases.
`totalRecovered(country)` returns the updated number of recovered.
`totalDeaths(country)` returns the updated number of deaths.



### Retrieve worldwide recent data

worldCases,worldRecovered and worldDeaths functions does not require any arguments and retrieve recent numbers accordingly.



Use provided functions with Promise syntax:

```
const covidData= require('coronavirus-live-data')

covidData.totalCases('il').then((totalCases)=>{
    console.log('total cases in Israel: '+totalCases) 
}).catch((error)=>{
    console.log(error)
})

```


## Data
The data is extracted using web scraping techniques.

as soon as any of the countries update data, it will affect the module immediately.


### Examples

Retrieving total recovered in the Netherlands:

```
covidData.totalRecovered('Netherlands').then((totalRecovered)=>{
    console.log('totalRecovered: '+totalRecovered)
}).catch((error)=>{ 
    console.log(error)
})
```

Retrieving total cases in Brazil:

```
covidData.totalCases('BR').then((totalCases)=>{
    console.log('totalCases: '+totalCases)
}).catch((error)=>{ 
    console.log(error)
})
```

Retrieving world total cases:

```
covidData.worldCases().then((worldCases)=>{
    console.log('worldCases: '+worldCases)
}).catch((error)=>{
    console.log(error)
})
```



## License
[MIT](https://choosealicense.com/licenses/mit/)