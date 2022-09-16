const uuid = require("uuid");
const { hashPassword } = require("../utils/crypt");

const comments = require("../models/comments.model");
const Roles = require("../models/roles.model");

const getAll = async () => {
  const res = await comments.findAll({
  })
  return res
};

const getAllByPostId = async (id) => {
  const res = await comments.findAll({
    where: { postId:id }
  });
  return res;
}

const create = async (data) => {
  const newComment = await comments.create({
    id: uuid.v4(),
    postId:data.postId,
    userId:data.userId,
    text: data.text
  })
  return newComment;
};

module.exports = {
  getAll,
  create,
  getAllByPostId
}