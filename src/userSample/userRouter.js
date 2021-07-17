const router=require ('express').Router();
const user=require('./userController');

router.post('/converter',user.currencyConvert);
router.get('/getConverter/:currentCountry',user.getConverter)
router.get('/getTotal',user.getTotal)

module.exports=router;