const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
   
})



/*



task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log('Error!', error)
})

*/


