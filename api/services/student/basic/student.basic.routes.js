const SchemaValidator = require("../../../utils/middlewares/SchemaValidator");
const validateRequest = SchemaValidator(true);

module.exports = app => {
    const student = require("./student.basic.controller")

    app.put("/student/grade", validateRequest, student.addGrade);

    app.post("/student/enroll", validateRequest, student.enrollStudent)

    app.get("/student",validateRequest,student.getAllStudents)

}