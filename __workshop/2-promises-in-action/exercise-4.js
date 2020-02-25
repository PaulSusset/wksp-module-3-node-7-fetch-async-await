const request = require('request-promise');

const getTronaldDump = async () => {
    try {let quote = await request('https://api.tronalddump.io/random/quote', {
        method: 'GET',
        headers: {
            "Accept":'application/JSON'
        }
    });
    console.log(JSON.parse(quote).value)
    return await JSON.parse(quote).value}

    catch (err){ console.log(err)}
}
getTronaldDump()

module.exports = { getTronaldDump }