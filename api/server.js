// IMPORTS AT THE TOP
// IMPORTS AT THE TOP
// IMPORTS AT THE TOP

const express = require('express') // look inside node modules folder and check for express. 



// INSTANCE OF EXPRESS APP
// INSTANCE OF EXPRESS APP
// INSTANCE OF EXPRESS APP

// build a simplistic server, invoking express creates the server for us. 
const server = express()



// GLOBAL MIDDLEWARE
// GLOBAL MIDDLEWARE
// GLOBAL MIDDLEWARE

// ENDPOINTS 
// ENDPOINTS 
// ENDPOINTS 

// build an endpoint 
server.get('/hello', (req, res) => {
    res.json({ message: 'hello'})
}) // pass a callback 


// EXPOSING THE SERVER TO OTHER MODULES
module.exports = server