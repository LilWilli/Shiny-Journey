const { join, sep, basename, resolve, normalize, } = require('path');
console.log(sep);
//to form a file path 
const filepath = join("/content", "subfolder", "test.txt")
console.log(filepath);
//To bring out only the file or the last content on the file directory

const base = basename(filepath)
console.log(base);

const absolute = resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);

let path1 = 'c:/training/April2024Backend/math_helpers.js';
let path2 = 'math_helpers.js';
// console.log(!isAbsolute(path2));
let pathToCars = join('resources', 'private', 'texts', 'cars.txt');
let pathToSample = join('resources', 'public', 'texts', 'sample.txt');
let absPathToCars = resolve(pathToCars);
let absPathToSample = join(__dirname, 'resources', 'public', 'texts', 'sample.txt');
let rawPath = '/resources//public/../public/texts/sample.txt';

console.log('rawPath :>> ', normalize(rawPath));
console.log('currrent file :>> ', basename(__filename));
console.log('__filename :>> ', __filename);
console.log('pathToCars :>> ', pathToCars);
console.log('absPathToCars :>> ', absPathToCars);
console.log('pathToSample :>> ', pathToSample);
console.log('absPathToSample :>> ', absPathToSample);

