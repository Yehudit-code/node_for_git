const express = require("express")
const cors = require("cors")
const {corsOptions} = ("./config/corsOptions")
const {log} = require("./middlewares/log")
const app = express()
const PORT = process.env.PORT || 1122
app.use(cors(corsOptions))
//const whitelist = ['http://localhost:1066/a', ['http://localhost:1066/b'],['http://localhost:1066/c']]
app.use(log())
app.get('/',(req, res)=>{
    res.send("good day😊")
})

app.get('/a',(req, res)=>{
    res.send("😂😂😂😂")
})
app.get('/b',(req, res)=>{
    res.send("😘😘😘")
})
app.get('/c',(req, res)=>{
    res.send("😜😜😜")
})

app.listen(PORT, ()=>{
    console.log(`The server runing on port ${PORT}`);
})