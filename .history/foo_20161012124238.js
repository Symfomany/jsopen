
var xhr = require("xhr")
var $ = require("jquery");
var _ = require('lodash');

/*
xhr({
    uri: "https://jsonplaceholder.typicode.com/users",
    headers: {
        "Content-Type": "application/json"
    }
}, function (err, resp, body) {
   $('h3').text('Reponse!!!')
})
*/
var lab = _.map([1, 2, 3], function(n) { return n * 3; });
var lab = _.compact([0, 1, false, 2, '', 3]);

console.log(lab);





