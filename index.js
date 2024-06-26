const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require('morgan');
require('dotenv').config();
const dbConfig = require("./src/configs/db.config");
const serverConfig = require("./src/configs/server.config");
var cachegoose = require('recachegoose');
var cors = require('cors')

const app = express();

app.use(bodyParser.json());
app.use(morgan('combined'))
app.use(cors());


mongoose.connect(dbConfig.DB_URL)
.then(()=>{
    console.log("Successfuly connected to the database");
})
.catch(err=>{
    console.log("Couldnot connect to the DB")
})

cachegoose(mongoose, {
    engine: 'memory'
  });

require("./src/Routes/product.routes")(app)
require("./src/Routes/auth.routes")(app);
require("./src/Routes/user.routes")(app);
require("./src/Routes/ticket.routes.js")(app);
app.listen(serverConfig.PORT, ()=>{
    console.log(`Your application is running on port ${serverConfig.PORT}`)
})