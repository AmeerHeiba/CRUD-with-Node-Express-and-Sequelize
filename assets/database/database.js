const Sequelize = require("sequelize");

const sequelize = new Sequelize("moviesapp", "root", "Ghaza2024@", {
    dialect: "mysql",
    host: "localhost"
});

module.exports = sequelize;