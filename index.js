var schools = require('./school');
var info = [
    {
        schoolName: '学校1',
        students: ['女明星1', 'peter', 'jack', '女明星2'],
        teacherName: '王老师'
    },
    {
        schoolName: '学校2',
        students: ['女明星a', '小红', '小明'],
        teacherName: ['陈老师']
    }
];
schools.add(info);
