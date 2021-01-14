const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

const studentSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    email: String,
    name: String,
    year: Number,
    grades: [{
        nameOfSubject: String,
        creditHours: Number,
        grade: String
    }
    ],
},
    {
        toJSON: {
            transform: function (doc, ret, options) {
                ret.id = ret._id;
                delete ret._id;
                delete ret.__v;
            }
        }
    }
)

studentSchema.plugin(uniqueValidator);
const Student = mongoose.model("student", studentSchema);
module.exports = Student;