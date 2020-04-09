const request = require('request')
const forecast = (lat, lon, callback) => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=metric&appid=d50f1ce21d81fd93590fb448cbe8699d'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.cod === "404") {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, ' It is currently ' + body.main.temp + ' Degress Celcius. There is a ' + body.main.humidity + '% of humidity.Maximum Temperature: ' + body.main.temp_max + '. Minimum Temperature: ' + body.main.temp_min)

        }
    })
}

module.exports = forecast