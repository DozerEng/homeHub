/*
 * Goal is to redirect http to https, does not work
 */

const express = require("express");
const redirectApp = express();

// set up a route to redirect http to https
redirectApp.get('*', function(req, res) {  
    console.log("Redirecting to https://" + req.headers.host + req.url);
    //res.redirect('https://' + req.headers.host + req.url);
    res.redirect('http://www.google.ca');
    // Or, if you don't want to automatically detect the domain name from the request header, you can hard code it:
    // res.redirect('https://example.com' + req.url);
});