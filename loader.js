const path = require('path');
const fs = require('fs');
const globalConfig = require('./config');
let pathMap = new Map();

var files = fs.readdirSync(globalConfig.web_path)//读取配置路径下的所有文件
files.forEach(element => {
    let temp = require(`./${globalConfig.web_path}${element}`)
    if (temp.paths) {
        for (const [key, value] of temp.paths) {
            if (pathMap.get(key) == null) {
                pathMap.set(key, value)
            } else {
                throw new Error('ajax文件配置错误  重名' + key)
            }
        }
    }
});
module.exports = pathMap