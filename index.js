// import the server and start it 

// console.log('hello world!!!')

const server = require('./api/server')

// start the server by server.listen followed by PORT number and success callback
server.listen(5000, () => {
    console.log('server listening on 5000')
})

