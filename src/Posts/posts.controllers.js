const uuid = require("uuid");
const { hashPassword } = require("../utils/crypt");

const posts = require("../models/posts.model");
const Roles = require("../models/roles.model");

const getAll = async () => {
  const res = await posts.findAll({
  })
  return res
};

const getById = async (id) => {
  const res = await posts.findOne({
    where: { id }
  });
  return res;
}

const create = async (data) => {
  const newPost = await posts.create({
    id: uuid.v4(),
    description: data.description,
    userId: data.userId,
    likes:0
  })
  return newPost;
};

const edit = async (postId, data, userRol) => {
  let res = null
  if ("5ee551ed-7bf4-44b0-aeb5-daaa824b9473" === userRol) {//admin
    res = await posts.update(
      { data },
      { where: { id: postId } }
    )
  } else {
    res = await posts.update(
      {data},
      { where: { id: postId }, }
    )
  }
  return res
};

const remove = async (id) => {
  const postDeleted = await posts.destroy({
    where: {
      id: id,
    },
  });
  return postDeleted;
};




const getByUserId = async (UserId) => {
  const res = await posts.findAll({
    where: { userId:UserId }
  });
  return res;
};
module.exports = {
  getAll,
  create,
  getById,
  edit,
  remove,
  getByUserId
}