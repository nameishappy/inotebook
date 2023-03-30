const express=require("express")
const connectToMongo=require('./db')
connectToMongo()
const app=express();
const port=3000;
app.get('/',function(req,res){
    res.send("hello world");
})
app.listen(port,function(req,res){
    console.log(`server started at http://localhost:${port}/`)
})