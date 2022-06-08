const mongodb=require('mongodb')

const MongoClient=mongodb.MongoClient
const ObjectId=mongodb.ObjectId
const connectionURL='mongodb://127.0.0.1:27017'
const databaseName='task-manager'
var id=new ObjectId()
console.log(id.id)
MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client) =>{
    if (error){
         return console.log("Unable to connect");
    }
    console.log("Done successfully")
    const db=client.db(databaseName)
    pr=db.collection("tasks").insertMany([{
        description:"Node js",
        completed:true
    },{
        description:"GO home",
        completed:false
    }],(error,result)=>{
        if (error)
        {
              return console.log("Unable to insert")
            
        }
        console.log("ops",result.ops)
    })
    
})
