const request = require('request')

const geocode = (place, callback) => {
    const geocodeURL = 'https://api.mapbox.com/search/geocode/v6/forward?q='+place+'&access_token=pk.eyJ1Ijoicm95YWwxMzc2IiwiYSI6ImNtMGx6aG5vNjA0OGYya3NhMmx5OW5pdHgifQ.r6IIsZ8wyUDLyukAonC6og'

    request({url: geocodeURL, json: true},(error, response) =>{
        if (error){
            callback('Unable to connect to the server',undefined)
        }else if(response.body.features.length===0){
            callback('Unable to find location',undefined)
        }else{
            callback(undefined, {
                latitude: response.body.features[0].geometry.coordinates[1],
                longitude: response.body.features[0].geometry.coordinates[0],
                city: response.body.features[0].properties.name,
                location: response.body.features[0].properties.full_address
            })
        }
    })
}

module.exports = geocode
