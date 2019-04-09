
const APM_APP_DIR = '/dist/APM';

var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    path = require('path');

// var BASE_API_PATH = "/api/v1";
var app = express();
var port = (process.env.PORT || 3000);


app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, APM_APP_DIR)));


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, APM_APP_DIR, '/index.html'));
    console.log(path.join(__dirname, APM_APP_DIR, '/index.html'));
    console.log(Date() + " - GET /");
    res.sendStatus(200);
});


console.log("Starting API server...");

app.listen(port);

console.log("Server ready on port " + port + " !!");

