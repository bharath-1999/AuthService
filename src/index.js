const express = require('express');
const bodyParser = require('body-parser')
const apiRoutes = require('./routes/index')
const { PORT } = require('./config/serverConfig');
const app = express();
const db = require('./models/index')
const prepareAndStartServer = () =>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}))

    app.use('/api',apiRoutes)
    app.listen(3001, () => {
        console.log("server started at port ",3001)
        //db.sequelize.sync({alter: true});
    })
}

prepareAndStartServer()