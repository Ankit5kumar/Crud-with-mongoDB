const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/myapp'
mongoose.connect(url,
    {
        useNewUrlParser:true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log('mongodb connected')
    }).catch(err=>{
        console.log("err")
    })