
let http = require("http")

let ourApp = http.createServer(function(req, res){
    if (req.url == "/kizza"){
        res.end("hello user")
    }
    if (req.url == "/about"){
        res.end("go to hell user")
    }

})

ourApp.listen(3000)

//2.0 First NODE