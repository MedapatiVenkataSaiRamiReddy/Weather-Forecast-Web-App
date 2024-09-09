// const request = require('request')

// const forecast = (latitude, longitude,address, callback) => {
//     const url = 'https://api.weatherstack.com/current?access_key=74a336da357ad5c5b07c6af9756a45c6&query='+latitude+','+longitude+'&units=m'

//     request({url: url, json: true},(error, response)=>{
//         if(error){
//             callback('Unable to connect to the server!',undefined)
//         }else if(response.body.error){
//             callback('Unable to find location',undefined)
//         }else{
//             callback(undefined, 'In '+address+' the weather was '+response.body.current.weather_descriptions[0]+'. It is currently '+response.body.current.temperature+' degress out. It feels like '+response.body.current.feelslike+' degress out.')
//         }
//     })
// }

// module.exports = forecast

const request = require('request')

const forecast = (latitude, longitude,address, callback) => {
    const url = 'https://api.weatherstack.com/current?access_key=74a336da357ad5c5b07c6af9756a45c6&query='+latitude+','+longitude+'&units=m'

    request({url: url, json: true},(error, response)=>{
        if(error){
            callback('Unable to connect to the server!',undefined)
        }else if(response.body.error){
            callback('Unable to find location',undefined)
        }else{
            callback(undefined, 'In '+address+' the weather was '+response.body.current.weather_descriptions[0]+'. It is currently '+response.body.current.temperature+' degress out. It feels like '+response.body.current.feelslike+' degress.')
        }
    })
}

module.exports = forecast