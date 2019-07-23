let paths = new Map();

paths.set('/pageData', function (request, response) {
    throw new Error('程序错误')
})
paths.set('/pageData1', function (request, response) {

})

module.exports.paths = paths;