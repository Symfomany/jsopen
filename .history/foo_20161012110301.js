
"use strict";
var xhr = require("xhr")

xhr({
    body: someJSONString,
    uri: "/foo",
    headers: {
        "Content-Type": "application/json"
    }
}, function (err, resp, body) {
   console.log(resp)
})





