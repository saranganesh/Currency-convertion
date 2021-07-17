const user= require ('./userSample/userRouter')


module.exports=function(app){
    app.use('/user',user)
}