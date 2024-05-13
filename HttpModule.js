const http = require('http');
const server = http.createServer((req, res) => {
    // console.log(req);
    if (req.url === "/") {
        res.end("Hello we are on the homepage")
    }
    if (req.url==="/about") {
        res.end("Here is our short history")
    }
    res.end(`<h1>Oops!</h1>
    <p>We cant seem to find the page you are looking for</p>
    <a href="/">Back Home</a>
    `)
})
server.listen(3000)