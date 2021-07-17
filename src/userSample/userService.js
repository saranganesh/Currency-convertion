// const userModel=require('./userModel');
const axios = require('axios');

async function converter() {
    
        const config = {
            method: 'get',
            url: ' https://v6.exchangerate-api.com/v6/7537060533597d2465af5fca/latest/USD'
        }
    
        let res = await axios(config)
    
        console.log(res.status);
    }
    
    converter();


