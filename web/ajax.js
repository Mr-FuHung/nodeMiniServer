let paths = new Map();
const url = require('url');
const {
    queryStudentName,
    queryStudentBypwd
} = require('../server/studyServer');

paths.set('/pageData', function (request, response) {
    queryStudentName(function (err, result) {
        if (err == null) {
            response.end(
                result.map(function (item) {
                    return item.name
                }).toString()
            )
        } else {
            response.writeHead(404)
            response.end('<html><body><h1>404 查询失败</h1></body></html>')
        }
    })
})
paths.set('/login', function (request, response) {
    var params = url.parse(request.url, true).query;
    queryStudentBypwd(params, function (err, result) {
        if (err) {
            response.writeHead(404)
            response.end('<html><body><h1>404 查询失败</h1></body></html>')
            console.log(err)
        } else {
            if (result.length === 1) {
                response.end('OK')
            } else {
                response.end('NO')
            }
        }
    })
})

module.exports.paths = paths;