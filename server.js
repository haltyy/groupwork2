const express = require('express')
const app = express();

app.get('/lessons', function(request, response){
    response.header('Access-Control-Allow-Origin', '*')
    response.send([
        { 'topic': 'Math', 'location': 'London', 'price': 100 },
        { 'topic': 'Math', 'location': 'Liverpool', 'price': 80 },
        { 'topic': 'Math', 'location': 'Oxford', 'price': 90 },
        { 'topic': 'Math', 'location': 'Bristol', 'price': 120 },
       ])
})

app.get('/user', function(request, response){
    response.header('Access-Control-Allow-Origin', '*')
    response.send({'email': 'user@email.com', 'password':'mypassword'})
})

app.use(function (request, response){
    response.status(404).send("Page Not Found!")
})

app.listen(3000, () => {
    console.log("Runnning")
})