// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

// Returns the current position of the ISS
const getIssPosition = async () => {
    try{
        let iss = await request('http://api.open-notify.org/iss-now.json')
        iss = JSON.parse(iss)
        console.log({lng : iss.iss_position.longitude, lat: iss.iss_position.latitude })
        return {lng : iss.iss_position.longitude, lat: iss.iss_position.latitude }
    } catch (err){ console.log(err)}
    }
    

getIssPosition();