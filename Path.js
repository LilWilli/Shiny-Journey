const path = require('path');
console.log(path.sep);
//to form a file path 
const filepath = path.join("/content", "subfolder", "test.txt")
console.log(filepath);
//To brig out only the file or the last content on the file directory

const base = path.basename(filepath)
console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);