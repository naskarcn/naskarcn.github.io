import HttpClient from '@/api/HttpClient'

let getGlobalData = ( ) => HttpClient.get( ) 
let getCountries = ( ) => HttpClient.get( '/countries' )
let getCountryData = ( country_code ) => HttpClient.get( `/countries/${ country_code }` )

export {
    getGlobalData,
    getCountries,
    getCountryData
}