var Student = require("./student");

function newStudent(req, res) {
    var student = new Student({
        name: req.body.name,
        birthday: req.body.birthday,
        gender: req.body.gender,
        words:req.body.words,
        notes:req.body.notes
    });

    // save the sample user
    student.save(function(err) {
        if (err) throw err;

        console.log('Student saved successfully');
        res.json({ success: true });
    });
}


//apiRoutes.delete('/deleteStudents', studentController.deleteStudent);
//apiRoutes.get('/findStudents', studentController.findStudent);
//apiRoutes.put('/updateStudents', studentController.updateStudent);

module.exports = {newStudent};


