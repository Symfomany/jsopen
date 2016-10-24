
var xhr = require("xhr")

xhr({
    uri: "https://jsonplaceholder.typicode.com/users",
    headers: {
        "Content-Type": "application/json"
    }
}, function (err, resp, body) {
   console.log(resp)
})





