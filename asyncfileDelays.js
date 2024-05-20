//started operating system process
// const { readFile } = require("fs")
// console.log("first")
// console.log(setTimeout((res, req) => {
//     console.log("Second");
// }, 0))
// console.log("third")

// //completed and exited operating system process
// console.log("Started a first task");
//CHECK FILE PATH !!!!!!
// readFile("./content/first.txt", "utf-8", (err, result) => {
//     if (err) {
//         console.log(err)
//         return;
//     } else {
//         console.log(result)
//         console.log("completed first task")
//     }
// })
// console.log("Completed")
// console.log(setInterval(() => {
//     console.log("Hello world")
// }, 2000))
// console.log("I Will run first")
//process stays alive unless
//Kill Process CONTROL + C
//unexpected error



//Using node server
const http = require('http');
const server = http.createServer((req, res) => {
    console.log("request event")
    res.end("Hello world")
})
server.listen(5000, () => {
    console.log("We are on port 5000......")
})