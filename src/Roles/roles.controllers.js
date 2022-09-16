const uuid = require("uuid");
const { hashPassword } = require("../utils/crypt");

const Roles = require("../models/roles.model");

const getAll = async () => {
  const res = await Roles.findAll({
  })
  return res
};

const getById = async (id) => {
  const res = await Roles.findOne({
    where: { id }
  });
  return res;
};

const create = async (data) => {
  const newRole = await Roles.create({
    id: uuid.v4(),
    name:data.name
  })
  return newRole;
};

const edit = async (userId, data, userRol) => {
  let res = null
  if ("5ee551ed-7bf4-44b0-aeb5-daaa824b9473" === userRol) {//admin
    res = await Roles.update(
      { ...data },
      { where: { id: userId } }
    )
  } else {
    res = await Roles.update(
      data,
      { where: { id: userId }, }
    )
  }
  return res
};

const remove = async (id) => {
  const roleDeleted = await Roles.destroy({
    where: {
      id: id,
    },
  });
  return roleDeleted;
};

module.exports = {
  getAll,
  create,
  getById,
  edit,
  remove
}