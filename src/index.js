const express=require("express")
require("./db/mongoose")
const User=require("./models/user")
const Task=require("./models/task")
const userRouter = require("./routers/user")
const taskRouter=require("./routers/task")
const bcryptjs=require("bcryptjs")

const app=express()
const port=process.env.PORT

/* app.use((req,res,next)=>{
    if (req.method=="GET"){
        res.send("Get reques disalble")

    }else{
        next()
    }
     
}) */
/* app.use((req,res,next)=>{
    res.status(503).send("Maintenance")
}) */
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port,()=>{
    console.log("Serving on the port "+port)
})
