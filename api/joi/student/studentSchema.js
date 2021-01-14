const Joi = require("joi");

const enrollStudent = Joi.object({
    email: Joi.string().email().required(),
    name: Joi.string().required(),
    id: Joi.number().required()
})

const addGrade = Joi.object({
    nameOfSubject: Joi.string().required(),
    grade: Joi.string().required(),
    creditHours: Joi.number().required()
})



module.exports = {
    "/student/enroll": enrollStudent,
    "/student/grade": addGrade,
}