const request = require('request');

request('https://www.olx.com.pk/tablets_c1455', function (err, res, body) {
    console.log(body);
});