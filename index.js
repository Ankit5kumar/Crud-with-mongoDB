const express = require('express');
const app = express();
require('./config/database')
const routes = require('./router/routes')
app.use(express.json())
app.use(routes)


app.listen(4000,() => {
    console.log("server is listening on port 4000")
})