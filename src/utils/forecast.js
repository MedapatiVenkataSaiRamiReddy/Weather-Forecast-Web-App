const request = require('request')

const forecast = (latitude, longitude,address, callback) => {
    const url = 'https://api.weatherstack.com/current?access_key=74a336da357ad5c5b07c6af9756a45c6&query='+latitude+','+longitude+'&units=m'

    request({url: url, json: true},(error, response)=>{
        if(error){
            callback('Unable to connect to the server!',undefined)
        }else if(response.body.error){
            callback('Unable to find location',undefined)
        }else{
            const weatherDesc = response.body.current.weather_descriptions[0];
            const temperature = response.body.current.temperature;
            const feelslike = response.body.current.feelslike;
            const humidity = response.body.current.humidity
            callback(undefined, 'In ' + address + ', the weather is ' + weatherDesc + '. It is currently ' + temperature + '°C. It feels like ' + feelslike + '°C and humidity is '+humidity)
        }
    })
}

module.exports = forecast