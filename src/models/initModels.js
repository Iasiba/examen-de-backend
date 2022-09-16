const Users = require('./user.model')
const Roles = require('./roles.model')
const PostImages = require('./postImages.model')
const Posts = require('./posts.model')
const Comments = require('./comments.model')

const initModels = () => {
    // Roles -> Users 
    Users.belongsTo(Roles);
    Roles.hasMany(Users);

    // Users <-> Posts
    Users.belongsToMany(Posts, { through: Comments });
    Posts.belongsToMany(Users, { through: Comments });

    // Posts -> Postmages
    PostImages.belongsTo(Posts);
    Posts.hasMany(PostImages);
}
module.exports = initModels