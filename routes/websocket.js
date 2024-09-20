const websocket = require("ws")
const wss = new websocket.Server({port:8080})

wss.on("connection",()=>{
    console.log("Connection established")

    ws.on("message",()=>{
        console.log("message received")
    })
    ws.on("close",()=>{
        console.log("connection disconnected")
    })
})

console.log("Websocket server is running on port 8080")


