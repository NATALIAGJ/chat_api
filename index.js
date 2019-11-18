const express = require('express')
const socketio = require('socket.io')
const http = require('http')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

io.on('connection', function(socket){
    console.log(`new client: ${socket.id}`)
})

/** namespace */
const space = io.of('/namespace1');
 
space.on('connection', function(socket){
    console.log(`someone connected ${socket.id}`)
    socket.on('message', (msg) => {
        console.log(msg)
        space.emit('message', msg)
    })
    socket.join('/room', function(){ 
        console.log('uniendo al usuario en el room')
        space.emit('hi', 'Hello everyone!')
    })
});
 
space.emit('hola', { key:'data' })

server.listen(5000, () => {
    console.log(`Server running in http://localhost:${5000}`)
})