const userModel=require('./userModel');

module.exports={
    currencyConvert:async(req,res)=>{
        try {
            let user = new userModel(req.body)
            await user.save(req.body)
            console.log("save currency",user);
            return res.send({
                message:" saved successfully",user
            })
        } catch (error) {
            console.log("some error occurred",error);
            return res.status(400).json({error})
        }
    },
    getConverter:(req,res)=>{
            currencyValue = Math.floor(Math.random()*100)
            console.log("currency value",currencyValue);
            userModel.findOneAndUpdate({currentCountry:req.params.currentCountry},{$set:{currencyValue:currencyValue}})
            .exec((err,result)=>{
                if(err){
                    return res.status(400).json({err});
                }
                else{
                    console.log("get the currency",result)
                    res.status(200).json({result});
                    }
              });         
        },
        getTotal:(req,res)=>{
          userModel.aggregate(
            [
              {
                $group: {
                  _id:"$currentCountry",
                  "total": { 
                      $sum: { $multiply:["$Amount", "$currencyValue"]}
                  },
                }
              }
            ],
            function(err, result){
              if (err) {
                res.send(err);
              } else {
                res.json(result);
                console.log("total",result)
              }
            }
          );
        }     
}
