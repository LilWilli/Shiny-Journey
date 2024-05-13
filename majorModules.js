//CommonJS, every file is module (by default)
//Modules - Encapsulated Code (only share minimum)
const names = require("./nameChainModule")
const sayHi = require("./moduleChain")
const data = require("./arrayChainOptionalModule")
require("./SumFunctionModule")
console.log(data);
console.log(names);
sayHi("susan") 
sayHi(names.john)
sayHi(names.peter)