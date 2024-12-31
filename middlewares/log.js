const fs = require("fs")
const uuid = require("uuid")
const path=require("path")
const date = require("date-fns")
const url = path.join(__dirname, "newFile.txt")
const log = (req, res, next) => {
    fs.appendFile(url, date.format(new Date(), "dd:MM:yy hh:mm:ss") + " " + uuid.v4() + " " + req.method + " " + req.headers.origin + " " + req.path + " " + '\n', (err) => { if (err) throw err })
    next()
}
module.exports = { log }


