//@flow

// @flow
var obj = {};
var axios = require('axios');
var kepa;
axios.get('/name').then(Response => (

    kepa = Response.data.name;
))

if (Math.random()) obj.prop = true;
else obj.prop = "hello";

// $ExpectError
var val1: boolean = obj.prop; // Error!
// $ExpectError
var val2: string = obj.prop; // Error!
var val3: boolean | string = obj.prop; // Works!