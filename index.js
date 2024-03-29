import express from "express";
import {createServer} from "node:http";
import {fileURLToPath} from "node:url";
import {dirname,join} from "node:path";
import {Server} from "socket.io"
const app = express();
const server = createServer(app);
const io = new Server(server);

const port = 8100
const __dirname  = dirname(fileURLToPath(import.meta.url))
app.get("/",(req, res)=>{
    res.sendFile(join( __dirname,"index.html"));
})

io.on("connection", (socket)=>{
    console.log("a user connected");
        socket.on("chat message", (msg)=>{
            socket.emit("chat message", msg)
        })
});
server.listen(port, ()=>{
    console.log("Server running at port: ", port )
})
