
"use strict";
var xhr = require("xhr")

xhr({
    body: "https://jsonplaceholder.typicode.com/users",
    uri: "/foo",
    headers: {
        "Content-Type": "application/json"
    }
}, function (err, resp, body) {
   console.log(resp)
})





