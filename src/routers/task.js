const express=require("express")
const Task=require("../models/task")
const auth=require("../middlewares/auth")
const router=new express.Router()


router.post("/tasks",auth,async(req,res)=>{
    const task=new Task({
        ...req.body,
        owner:req.user._id
    })
    try{
        await task.save()
        res.status(201)
        res.send(task)
    }catch(e){
        res.status(400).send(e)
    }
    /* task.save().then(()=>{
        res.status(201)
        res.send(task)
    }).catch((e)=>{
        res.status(400).send(e)
    }) */
})

router.get("/tasks",auth,async (req,res)=>{
    const match = {}

    if (req.query.completed) {
        match.completed = req.query.completed === 'true'
    }
    options={}
    if (req.query.limit){
        options.limit=parseInt(req.query.limit)
    }
    else{
        
        options.limit=10000

    }
    if (req.query.skip){
        options.skip=parseInt(req.query.skip)
    }
    else{
        
        options.skip=0

    }
    console.log(parseInt(req.query.limit))
    console.log(parseInt(req.query.skip))
    if (req.query.sortBy) {
        const parts = req.query.sortBy.split(':')
        options.sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
    }
    try {
        await req.user.populate({
            path: 'tasks',
            match,
            options
        })
        res.send(req.user.tasks)
    }catch(e){
        console.log(e)
        res.status(500).send()
    }
    /* Task.find({}).then((task)=>{
        res.send(task)
    }).catch((e)=>{
        res.status(500).send()
    }) */
})

router.get("/tasks/:id",auth,async (req,res)=>{
    console.log("id")
    const _id=req.params.id
    try {
        const task = await  Task.findOne({_id,owner:req.user._id})
        if (!task){
            return res.status(404).send()
        }
        res.send(task)
    }catch(e){
        res.status(500).send()
    }
    /* Task.findById(_id).then((task)=>{
        if (!task){
            return res.send(404).send()
        }
        res.send(task)
    }).catch((e)=>{
        res.status(500).send()
    }) */
})

router.patch("/tasks/:id",auth,async (req,res)=>{
        const updates=Object.keys(req.body)
        const allowedUpdates=["description","completed"]
        const isValidOperation=updates.every((update)=>  allowedUpdates.includes(update))
        if (!isValidOperation) {
            return res.status(400).send({ error: 'Invalid updates!' })}
    try{
        const task=await Task.findOne({_id:req.params.id,owner:req.user._id} )
        
        if (!task){
            return res.status(404).send()
        }
        updates.forEach((update)=>task[update]=req.body[update])
        await task.save()
        res.send(task)
    }catch(e){
        res.status(400).send(e)
    }
})

router.delete("/tasks/:id",auth,async(req,res)=>{
    try{
        const task=await Task.findOneAndDelete({_id:req.params.id,owner:req.user._id})
        if (!task ){
            return res.status(404).send()
        }
        res.send(task)
    }catch(e){
        res.status(500).send(e)
    }
})
module.exports=router