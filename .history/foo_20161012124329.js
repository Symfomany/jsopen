
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
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var objects2 = [{ 'x': 1, 'y': 3 }, { 'x': 2, 'y': 1 }];


console.log(_.differenceWith(objects, objects2));





