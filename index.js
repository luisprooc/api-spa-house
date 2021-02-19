const express = require('express');
const app = express();
const routes = require("./routes/index");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');



// Connect DB
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/rentalhouse",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Routing
app.use("/",routes());

app.listen(port=4000, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});