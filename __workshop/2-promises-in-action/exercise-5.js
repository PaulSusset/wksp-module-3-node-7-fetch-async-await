const request = require('request-promise');

const getGeekJoke = async () => {
    try{ 
        let joke = await request('https://geek-jokes.sameerkumar.website/api', {
            method: 'GET',
            headers: {
                'Accept': 'application/JSON'
            }
        })
        joke = JSON.parse(joke)
        console.log(joke)
        return joke
    }
    catch (err){console.log(err)}
}
getGeekJoke()