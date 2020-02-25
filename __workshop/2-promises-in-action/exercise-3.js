const request = require('request-promise');

const getDadJoke = async () => {
    let dad = await request('https://icanhazdadjoke.com/', {
        method: 'GET',
        // mode: '',
        // cache: '',
        // credentials: '',
        headers: {
            "Accept": "application/json"
        }
    })
    await console.log((JSON.parse(dad)).joke)
}
getDadJoke()