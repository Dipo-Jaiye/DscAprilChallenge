require('dotenv').config();
const { createServer, } = require("http");
const connection = require("./om/client");

// create node server
const app = createServer((req, res) => {

    // hello html endpoint
    if (req.url == "/hello") {
        res.write("<b>Hello GDSC</b>");
        res.end();
    }
    // hello api endpoint
    else if (req.url == "/api/hello") {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        })
            .end("{\"message\":\"Hello GDSC\"}");
    }
    else {
        res.end("server is working");
    }
});

// start server after database is connected
connection.on('ready', () => {
    console.log("database connected...");
    app.listen(3000, () => { console.log("server running on port 3000"); });
});

// use then/catch because an error throws when using await
connection.connect()
.then(() => {

});