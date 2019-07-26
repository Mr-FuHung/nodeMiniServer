const url = require('url');
const path = require('path');
const globalConfig = require('../config');

function loginFilter(request, response) {
    var pathName = url.parse(request.url).pathname;
    if (pathName === '/login.html' || pathName === '/login' || isStaticFile(pathName)) {
        return true
    }
    if (request.headers.cookie) {
        var cookies = request.headers.cookie.split(';')[0].trim().split('=')[0]
        console.log(cookies)
        if (cookies === 'id') {
            return true
        }
    }
    response.writeHead(302, { 'location': 'login.html' })
    response.end()
    return false;
}
function isStaticFile(pathName) {
    var ext = path.parse(pathName).ext
    if (ext != '.html') {
        return globalConfig.static_file_type.includes(ext)
    }
}
module.exports.paths = loginFilter;