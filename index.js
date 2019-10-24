var express = require("express");
var app = express();

var api = express.Router();

var bodyParser = require("body-parser");

var cors = require("cors");

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//controllers
const showHello = (req, res) => {
    res.send({
        message: "Hello"
    })
}

const students = [
    {
        name: 'pepe',
        birth: new Date()
    },
    {
        name: 'juan',
        birth: new Date()
    },
    {
        name: 'joaquín',
        birth: new Date()
    }
]


const getStudents = (req, res) => {
    console.log(req.params.indice)
    console.log(req.body)
    res.send(students);
}

//routes
api.get("/hello", showHello);

api.get("/students/:indice", getStudents);

api.get("/students", getStudents);

app.use("/api", api);

//boot
const port = 40000;
app.listen(port, () => {
    console.log("listening on http://localhost:" + port);
});
