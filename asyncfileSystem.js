const { readFile, writeFile } = require("fs");
readFile("./content/first.txt", "utf-8", (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    console.log("start");
    readFile("./content/second.txt", "utf-8", (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result
        writeFile("./content/result-async.txt", `Here is the result : ${first}, ${second}`, { encoding: "utf-8", flag: "a" }, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("done with this task");
        })
    })
})
console.log("starting next task");