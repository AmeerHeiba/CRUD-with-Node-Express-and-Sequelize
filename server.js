const express = require("express");
const sequelize = require("./assets/database/database");
const bodyParser = require("body-parser");

const User = require("./models/userModel");
const userRouter = require("./routes/usersRoutes");


const app = express();

app.use(bodyParser.json());
app.use("/users", userRouter);

sequelize.sync({ alter: true })
    .then(() => {
        console.log("Database & tables synced!");
        app.listen(3000, () => {
            console.log("Server started on port 3000");
        });
    })
    .catch(err => console.log(err));

