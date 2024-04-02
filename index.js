const { createServer, } = require("http");

const app = createServer((req, res) => {

    // hello html endpoint
    if (req.url == "/hello"){
        res.write("<b>Hello GDSC</b>");
        res.end();
    }
    // hello api endpoint
    else if (req.url == "/api/hello"){
        res.writeHead(200, {
            'Content-Type': 'application/json'
        })
        .end("{\"message\":\"Hello GDSC\"}");
    }
    else{
        res.end("server is working");
    }
});


app.listen(3000, () => { console.log("server running on port 3000"); });