let dateLogger = (req, res, next) => { console.log(new Date()); next() }
let urlLogger = (req, res, next) => { console.log(req.url); next() }

module.exports = {dateLogger, urlLogger}