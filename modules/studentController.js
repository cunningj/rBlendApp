var Student = require("./student");

function newStudent(req, res) {
    var student = new Student({
        name: req.body.name,
        birthday: req.body.birthday,
        words:req.body.words,
        notes:req.body.notes,
        therapist: req.username
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
    Student.find({therapist:req.username}, function(err,students) {
        //all obj grabbed
        //search through student for name
        //add name to array
        //write function takes an array and makes links//in front end

        res.json(students);
        //res.json(students)
    })
}

function editStudents(req, res) {
    Student.findOneAndUpdate({_id:req.body._id}, req.body, function(err) {
        if (err) throw err;
        console.log('Student UPDATED successfully');
        res.end(JSON.stringify({ success: true }));
    });
}


// delete the student
function deleteStudents(req, res) {
    Student.findOne({_id:req.body._id}, function(err, student) {
        console.log('ATTEMPTING TO DELETE: ' + req.body._id);
        if (err) throw err;
        student.remove(function(err, deleteStudents){
            console.log('Student deleted successfully');
            console.log('THIS IS deleteStudents: ' + deleteStudents)
            res.json(deleteStudents)});
    })}



//apiRoutes.put('/updateStudents', studentController.updateStudent);

module.exports = {newStudent, showAllStudents, editStudents, deleteStudents};



