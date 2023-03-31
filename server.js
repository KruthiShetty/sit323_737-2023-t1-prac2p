var express  = require("express")
var app = express()

app.get("/", function(req, res,) //Using the get method
{
    res.send("hello, world!")
})

//simple time logger request for a specific route
app.use('/', (req, res, next) =>{
    console.log('A new request released at ' +Date.now());
    next();
});

app.listen(3000, () =>{
    console.log('server is listening on port 3000')

})//web server will listen to this particular port number