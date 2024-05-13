const { readFile } = require('fs');
const http = require('http');
const server = http.createServer((req, res) => {
    // console.log(req);
    if (req.url === "/") {
        const view = readFile("./content/subfolder/Faith.html", "utf-8", (err, result) => {
            if (err) {
                console.log(err);
                return;
            } else {
                res.end(result)
            }
        })
    } else if (req.url === "/about") {
        const about = readFile("./content/About.html", "utf-8", (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.end(result)
            }
        })
    } else {
        res.end(`<h1>Oops!</h1> <p>We cant seem to find the page you are looking for</p>
         <a href="/">Back Home</a>`)
    }
})
server.listen(3000)
