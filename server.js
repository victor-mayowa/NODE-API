const express = require("express")
const app = express()

//routes

app.get("/get", (req,res)=>{
    res.send("hello again")
})

app.get("/",(req,res) =>{
    res.send("hello from the side")
})

app.listen(3000, ()=>{
    console.log("NODE apis running on port 3000")
})