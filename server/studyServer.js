const studyDao = require('../dao/studyDao')

function queryStudentName(success) {
    studyDao.queryStudentName(success)
}
function queryStudentBypwd(params,success) {
    studyDao.queryStudentBypwd(params,success)
}

module.exports={
    queryStudentName,
    queryStudentBypwd
}