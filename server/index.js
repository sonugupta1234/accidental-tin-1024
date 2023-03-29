

const express= require("express");
const connection  = require("./config/db");
const productRoute = require("./routes/productRoute");
const userRouter = require("./routes/user.route");
const app=express();
require("dotenv").config();
app.use(express.json())
const port= process.env.PORT
app.get("/",(req,res)=>{
    res.send("home page")
})

app.use("/user",userRouter);
app.use("/product",productRoute)

connection();
app.listen(port,()=>{
    console.log(`port is running at ${port}`)
})