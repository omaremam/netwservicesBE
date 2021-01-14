const SchemaValidator = require("../../../utils/middlewares/SchemaValidator");
const validateRequest = SchemaValidator(true);

module.exports = app => {
    const user = require("./user.basic.controller");

    app.post("/user/register", user.signUp);

    app.post("/user/signin",  user.signIn)

    app.get("/user",user.getAllUsers)

}