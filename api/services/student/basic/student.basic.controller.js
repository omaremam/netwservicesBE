const handleApiError = require("../../../utils/ErrorHandler");
const Student = require("../student.model");



exports.enrollStudent = async (req, res) => {
    try {
        let student = new Student({
            email: req.body.email,
            name: req.body.name,
            year: 1,
        });
        await student.save()
        let students = await Student.find()
        res.status(200).send(students)
    }
    catch (error) {
        handleApiError(res, error, "enrollStudent")
    }
}


exports.addGrade = async (req, res) => {
    try {
        let student = await Student.findById(req.headers.id);
        if (!student) return res.status(400).send('Invalid student');
        //TODO send email to student
        student.grades.push({
            nameOfSubject: req.body.nameOfSubject,
            creditHours: req.body.creditHours,
            grade: req.body.grade
        })
        await student.save()
        res.status(200).send(student);
    }
    catch (error) {
        handleApiError(res, error, "addGrade")
    }
}

exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.find()
        if (!students) return res.status(200).send([]);
        res.status(200).send(students);
    }
    catch (error) {
        handleApiError(res, error, "getAllStudents");
    }
}




