var klass = require('./klass');

function add(schools) {
    for (var i in schools) {
        console.log('学校：' + schools[i].schoolName);
        klass.add( schools[i].students, schools[i].teacherName);
    }
}
exports.add  = add;