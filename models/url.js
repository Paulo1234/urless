const Sequelize = require('sequelize')
const database = require('../db')

const Url = database.define('url', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    urlCode: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Url