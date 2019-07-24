const fs = require('fs')
const globalConfig = require('./config')
let logPath = globalConfig.log_path + globalConfig.log_name
function log(data) {
    // fs.writeFile(logPath, data + '\n', { flag: 'a' }, function (params) {
    //     console.log(logPath)
    // })
    fs.appendFile(logPath, data + '\n', function (params) {
        console.log(logPath)
    })
}

module.exports = log