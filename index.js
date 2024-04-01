const { createServer, } = require("http");

const app = createServer((req, res) => {
    res.end("server is working");
});

app.listen(3000, () => { console.log("server running on port 3000"); });