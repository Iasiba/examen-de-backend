const { DataTypes } = require('sequelize')

const { db } = require('../utils/database')

const PostImages = db.define('postImages', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
    },
    url: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
            isUrl: true,
        }
    },
    postId: {
        allowNull: false,
        type: DataTypes.UUID
    }
})

module.exports = PostImages