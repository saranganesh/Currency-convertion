var app = require('../server');
require('../master/db');

app.listen(8000,()=>console.log("port is running in 8000"));