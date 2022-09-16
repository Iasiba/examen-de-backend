const { DataTypes } = require('sequelize')

const { db } = require('../utils/database')

const Posts = db.define('posts', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
    },
    description: {
        allowNull: false,
        type: DataTypes.TEXT
    },
    userId: {
        allowNull: false,
        type: DataTypes.UUID
    },
    likes: {
        allowNull: false,
        type: DataTypes.INTEGER
    }
})

module.exports = Posts