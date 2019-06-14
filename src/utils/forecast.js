const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/a46cdb9c301ef809e8f93e96f41d9ff1/'+ latitude + ',' + longitude + '?units=si '

    request({ url, json: true },(error, { body } ) => {

        const {error:berror, daily, currently} = body

        if(error) {
            callback('Unable to connect to weather service!',undefined)
        } else if (berror) {
            callback('Unable to find forecast',undefined)
        } else {
            const forecastData = daily.data[0].summary + ' It is currently ' + currently.temperature + ' degrees out. There is a ' + currently.precipProbability + '% chance of rain. The high today is ' + daily.data[0].temperatureHigh + ' with a low of ' + daily.data[0].temperatureLow + '.'
            callback(undefined, forecastData)
        }
      
} )

}

module.exports = forecast
