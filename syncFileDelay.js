const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Home page")
    }
    else if (req.url === "/about") {
        //Blocking code !!!!
        // for (let i = 0; i < 1000; i++) {
        //     for (let j = 0; j < 1000; j++) {
        //         console.log(`${i} ${j}`)
        //     }
        res.end("About page")
    }
    else if (req.url === "/contact") {
        res.end("Contact page")

    } else {
        res.end("Error")
        // console.log(res.end("Error"))
    }
})

server.listen(2, () => {
    console.log("Server is listening on port 2...")
})