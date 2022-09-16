const { DataTypes } = require('sequelize')

const { db } = require('../utils/database')

const Comments = db.define('comments', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
    },
    postId: {
        allowNull: false,
        type: DataTypes.UUID
    },
    userId: {
        allowNull: false,
        type: DataTypes.UUID
    },
    text: {
        allowNull: false,
        type: DataTypes.STRING
    }
})

module.exports = Comments