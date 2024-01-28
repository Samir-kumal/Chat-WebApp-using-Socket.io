import express from "express";
import {createServer} from "node:http";
import {fileURLToPath} from "node:url";
import {dirname,join} from "node:path"
const app = express();
const server = createServer(app);
const port = 8000
const __dirname  = dirname(fileURLToPath(import.meta.url))
app.get("/",(req, res)=>{
    res.sendFile(join( __dirname,"index.html"));
})
server.listen(port, ()=>{
    console.log("Server running at port: ", port )
})