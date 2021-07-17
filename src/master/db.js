const mongoose=require('mongoose');

// mongoose.connect('mongodb://localhost:27017/test',
mongoose.connect('mongodb+srv://saranyaghanesh:alliswell@cluster0.mlsdv.mongodb.net/currencyConverter?retryWrites=true&w=majority',
{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:true},(err,result)=>{
     
if(err){
        console.log("Database not connected",err);
    }
    else{
        console.log("Database are connected");
    }
})