// nothing here yet...
const request = require('request-promise');
let currentJoke = undefined

const jokeSelectHandle = (req, res) => {
    const joke = req.body.type
    res.redirect(`/${joke}`)
}

const getGeekJoke = async (req, res) => {
    try{ 
        let joke = await request('https://geek-jokes.sameerkumar.website/api', {
            method: 'GET',
            headers: {
                'Accept': 'application/JSON'
            }
        })
        console.log( 'type', typeof currentJoke, currentJoke)
        currentJoke = JSON.parse(joke)
        console.log( 'type', typeof currentJoke, currentJoke)
        res.redirect('/make-me-laugh')
    }
    catch (err){console.log(err)}
}

const getTronaldDump = async (req, res) => {
    try {let joke = await request('https://api.tronalddump.io/random/quote', {
        method: 'GET',
        headers: {
            "Accept":'application/JSON'
        }
        });
        currentJoke = await JSON.parse(joke).value
        console.log( 'type', typeof currentJoke, currentJoke)
        res.redirect('/make-me-laugh')
    }
    catch (err){ console.log(err)}
}

const getDadJoke = async (req, res) => {
    let joke = await request('https://icanhazdadjoke.com/', {
        method: 'GET',
        // mode: '',
        // cache: '',
        // credentials: '',
        headers: {
            "Accept": "application/json"
        }
    })
    currentJoke = (JSON.parse(joke))['joke']
    console.log( 'type', typeof currentJoke, currentJoke)
    res.redirect('/make-me-laugh')
}

module.exports = { getDadJoke, getTronaldDump, getGeekJoke, jokeSelectHandle, currentJoke }