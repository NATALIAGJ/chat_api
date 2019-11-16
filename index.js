const express = require('express')
const socketio = require('socket.io')
const http = require('http')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

server.listen(5000, () => {
  console.log(`Server running in http://localhost:${5000}`)
})

io.on('connection', function(socket){
    //imprimiendo el id del cliente conectado 
    console.log(`client: ${socket.id}`)
})