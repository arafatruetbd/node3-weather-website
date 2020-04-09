const request = require('request')

const geocode = (address, callback) => {
 
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + address + '&units=metric&appid=d50f1ce21d81fd93590fb448cbe8699d'
request({ url, json: true }, (error, { body }) => {
    if (error) {
       // return console.log('Unable to connect to location services!')
        callback('Unable to connect to location services!', undefined)
    } else if (body.cod==="404") {
       
       // return console.log(body.message)
       callback('Unable to find location. Try another search.', undefined)
    } else {
        callback(undefined, {
            latitude: body.coord.lat,
            longitude: body.coord.lon,
            location: body.name
        })
    }
})
}

module.exports = geocode