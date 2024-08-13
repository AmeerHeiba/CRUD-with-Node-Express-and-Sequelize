const User = require("../models/userModel");


exports.getAllUsers = (req, res) => {
    User.findAll()
    .then(
        users => {
            res.send(users);
        }
    )
    .catch(err => {
        console.log(err);
    })
}

exports.addUser = (req, res) => {
    const name = req.body.name;
    console.log("name", name);
    const email = req.body.email;
    console.log("email", email);
    const password = req.body.password;
    console.log("password", password);
    User.create({
        name: name,
        email: email,
        password: password
    })
    .then(
        user => {
            res.send(user);
        }
    )
    .catch(err => {
        console.log(err);
    });
}