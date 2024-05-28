const { createReadStream, appendFile, writeFile } = require('fs');
// appendFile("./content/big.txt", "Willi\nWilli\nWilli\nWilli\nWillsi\nWilli\nWilli\nWilli\nWilli\nWilli\nWilli\nWilli\nWilli\nWilli\nWilli\nWilli\nWilli\nWilli\nWilli\nWilli\nWilli\n", "utf-8", (err, result) => {
//     if (err) {
//         console.log(err)

//     } else {
//         console.log(result)
//     }
// })
// const stream = createReadStream("./content/big.txt",{highWaterMark:9000})
// stream.on("data", (res) => {
//     console.log(res)
// })
// stream.on("error", (err) => {
//     console.log(err)
// })

console.log("stream examples")
for (let i = 0; i < 100000; i++) {
  writeFile("./content/big.txt", `Willi\n ${i}`, "utf-8", (err, result) => {
      if (err) {
          console.log(err)
  
      } else {
          console.log(result)
      }
  })
    
}