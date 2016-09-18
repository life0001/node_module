var student = require('./student');
var teacher = require('./teacher');

function add(students, teacherName) {
    teacher.add(teacherName);
    for (var i in students) {
        student.add(students[i]);
    }
}

exports.add = add;