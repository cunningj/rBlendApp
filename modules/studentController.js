var Student = require("./student");

function newStudent(req, res) {
    var student = new Student({
        name: req.body.name,
        birthday: req.body.birthday,
        gender: req.body.gender,
        words:req.body.words,
        notes:req.body.notes
    });

// save the new student
    student.save(function(err) {
        if (err) throw err;

        console.log('Student saved successfully');
        res.end(JSON.stringify({ success: true }));
    });
}

// show all students function
function showAllStudents(req, res) {
    Student.find(function(err,students) {
        res.json(students)
    })
}


//apiRoutes.delete('/deleteStudents', studentController.deleteStudent);
//apiRoutes.get('/findStudents', studentController.findStudent);
//apiRoutes.put('/updateStudents', studentController.updateStudent);

module.exports = {newStudent, showAllStudents};



