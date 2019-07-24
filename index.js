const http = require('http');
const path = require('path');
const url = require('url');
const fs = require('fs');
const globalConfig = require('./config');
const loader = require('./loader');
const log = require('./log');
http.createServer(function (request, response) {
    var pathName = url.parse(request.url).pathname;
    var params = url.parse(request.url, true).query;
    var isStatic = isStaticFile(pathName);
    if (isStatic) {//请求的静态文件
        try {
            var fsData = fs.readFileSync(path.join(globalConfig.page_path, pathName))
            response.writeHead(200)
            response.end(fsData)
        } catch (error) {
            response.writeHead(404)
            response.end('<html><body><h1>404 Not Found</h1></body></html>')
        }
    } else {//请求的动态数据
        console.log('请求了动态数据')
        if (loader.get(pathName) != null) {
            try {
                loader.get(pathName)(request, response)
            } catch (error) {
                response.writeHead(500)
                response.end('<html><body><h1>服务器出错</h1></body></html>')
            }
        } else {
            response.writeHead(404)
            response.end('<html><body><h1>404 Not Found</h1></body></html>')
        }
    }

}).listen(12306, function () {
    console.log('服务启动成功')
    log('服务启动')
})
function isStaticFile(pathName) {
    return globalConfig.static_file_type.includes(path.parse(pathName).ext)
}