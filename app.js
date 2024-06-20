const express = require('express');
const app = express();
const main = require('./routes/home');
const sub = require('./routes/crud');
const db = require('./database/server').db;
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

  db.connect((err) => {
    if (err) {
      console.error("Error connecting to the database:", err);
    } else {
      console.log("Connected to the database.");
    }
  });

app.set('view engine','ejs');

app.get("/",main.home);
app.post("/create",sub.create);
app.get("/create",sub.create);
app.post("/update",sub.update);
app.get("/update",sub.update);
app.post("/delete",sub.delete);
app.get("/delete",sub.delete);
app.listen(3000, (req,res)=>{
    console.log("connected on port:3000");
})