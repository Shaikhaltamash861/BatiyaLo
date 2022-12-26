const mongoose=require('mongoose');
const DB='mongodb+srv://conversation:altu@cluster0.taulepm.mongodb.net/talks?retryWrites=true&w=majority'
mongoose.connect(DB)
.then(()=>{
    console.log('DB is connected')
})
.catch((err)=>{ console.log(err)})
