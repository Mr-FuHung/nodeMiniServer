const path = require('path');
const fs = require('fs');
const globalConfig = require('./config');

var files = fs.readdirSync(globalConfig.filter_path)//读取配置路径下的所有文件
var filterSet = []
files.forEach(element => {
    let temp = require(`./${globalConfig.filter_path}${element}`)
    if (temp.paths) {
        filterSet.push(temp.paths)
    }

});


module.exports = filterSet;