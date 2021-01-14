const handleApiError = require("../../../utils/ErrorHandler");
const User = require("../user.model");
const bcrypt = require('bcryptjs');


exports.signUp = async (req, res) => {
    try {
        let user = new User(req.body);
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        await user.save();
        res.status(200).send({ message: "User Successfully registered" })
    }
    catch (error) {
        handleApiError(res, error, "signUp")
    }
}


exports.signIn = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email });
        console.log(req.body.email,req.body.password)
        if (!user) return res.status(400).send('Invalid email or password');
        const validpassword = await bcrypt.compare(req.body.password, user.password);
        if (!validpassword) return res.status(400).send('Invalid email or password');
        res.status(200).send(user);
    }
    catch (error) {
        handleApiError(res, error, "signIn")
    }
}

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select("-password")
        if (!users) return res.status(200).send([]);
        res.status(200).send(users);
    }
    catch (error) {
        handleApiError(res, error, "getAllUsers");
    }
}




