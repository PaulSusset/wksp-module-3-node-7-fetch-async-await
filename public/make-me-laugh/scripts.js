fetch('/currentJoke')
    .then(res => {
        console.log(res)
        return res.text()
    }
    ).then(
        joke => {
            console.log(joke)
            let jokeDiv = document.createElement('div')
            jokeDiv.innerText = joke
            document.getElementById('joke').appendChild(jokeDiv)
        })
    