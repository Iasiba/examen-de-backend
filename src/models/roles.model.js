const { DataTypes } = require('sequelize')

const { db } = require('../utils/database')

const Roles = db.define('roles', {
    id: {
        allowNull: false,
        type: DataTypes.UUID,
        primaryKey: true
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    }
})


module.exports = Roles