require('dotenv').config();
const { createServer, } = require("http");
const { createClient, } = require("redis");
const { REDIS_HOST, REDIS_PORT, REDIS_PASSWORD, } = process.env;

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

// create database client
const client = createClient({
    password: REDIS_PASSWORD,
    socket: {
        host: REDIS_HOST,
        port: REDIS_PORT
    }
});

// add error handler for the database client
client.on('error', error => {
    console.error(`Redis client error:`, error);
});

// start server after database is connected
client.on('ready', () => {
    console.log("database connected...");
    app.listen(3000, () => { console.log("server running on port 3000"); });
});

// use then/catch because an error throws when using await
client.connect()
.then(() => {

});