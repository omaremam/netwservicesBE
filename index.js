const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors')
const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, X-Auth-Token, Content-Type, Accept"
    );
    // res.header("Access-Control-Expose-Headers", "Access-Token", "X-Auth-Token")
    next();
  });
  app.use(
    cors({
      exposedHeaders: "X-Auth-Token"
    })
  );

mongoose.connect('mongodb+srv://omaremam:u4meandme4u@cluster0.ozvwk.mongodb.net/test?authSource=admin&replicaSet=atlas-ozx1v1-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true')
    // this will create database in mongodb
    .then(() => console.log('connected to mongodb'))
    .catch(err => console.error('not connected to monogodb'));

app.use(express.json());
app.listen(4000, () => console.log('\n' + 'listening on port 3000 ...'));
require("./api/services/auth/basic/user.basic.routes")(app);
require("./api/services/student/basic/student.basic.routes")(app);


const port = process.env.PORT || 4000;