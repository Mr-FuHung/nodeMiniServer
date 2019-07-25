const connection = require('./dbutil')
connection.connect()

function queryStudentName(success) {
    let sql = `select * from student`
    connection.query(sql, function (err, result) {
        success(err, result)
    })
}
function queryStudentBypwd(params, success) {
    let sql = `select * from student where stu_num=? and pwd=?`
    connection.query(sql, [params.user, params.password], function (err, result) {
        success(err, result)
    })
}
// connection.end()

module.exports = {
    queryStudentName,
    queryStudentBypwd
}