const express = require("express");

const router = express.Router();

const userController = require("../controllers/usersController");

router.get("/", (req, res) => {
   userController.getAllUsers(req, res);
});

router.post("/add-user", (req, res)=>{
    userController.addUser(req, res);
});

module.exports = router;