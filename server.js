'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { getDadJoke, getTronaldDump, getGeekJoke, jokeSelectHandle, jokeUpdate } = require('./handlers')

const PORT = process.env.PORT || 8000;

const currentJokeHandle = (req, res) => {
    res.send(jokeUpdate())
}

express()
    .use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    })
	.use(morgan('dev'))
	.use(express.static('public'))
    .use(bodyParser.json())
    .use(express.urlencoded({extended: false}))
    .set('view engine', 'ejs')

    // endpoints
    .get('/dad', getDadJoke)
    .get('/geek', getGeekJoke)
    .get('/POS', getTronaldDump)
    .post('/jokeSelect', jokeSelectHandle)
    .get('/currentjoke', currentJokeHandle)
    .listen(PORT, () => console.log(`Listening on port ${PORT}`));