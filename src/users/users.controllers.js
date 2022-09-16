const uuid = require("uuid");
const { hashPassword } = require("../utils/crypt");

const Users = require("../models/user.model");
const Roles = require("../models/roles.model");
const posts = require("../models/posts.model");

const getAllUsers = async() => {
  const res= await Users.findAll({
    attributes:{
      exclude:["password","createdAt","UpdatedAt","roleId"]
    }
  })
  //? select * from users;
  return res
};

const getUserById = async (id) => {
  const res = await Users.findOne({
    where: { id },
    include: {
      model: acomodations,
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    },
    attributes: {
      exclude: ["password", "createdAt", "updatedAt", "roleId"],
    },
  });
  return res;
  //? select * from users where id = ${id};
};

const createUser = async (data) => {
  console.log("entro a crear users")
  
  const newUser = await Users.create({
    id: uuid.v4(),
    firstName: data.first_name,
    lastName: data.last_name,
    gender: data.gender,
    email: data.email,
    password: hashPassword(data.password),
    phone: data.phone,
    birthdayDate: data.birthday_date,
    dni: data.dni,
    address: data.address,
    profileImage: data.profile_image,
    status: "active",
    verified: false,
    roleId: "fef3a08d-2cec-4728-9745-7cbd2b37e557"
  });
  // const newUserWithSpreadOperator =  await Users.create({
  //   ...data,
  //   id: uuid.v4(),
  //   password: hashPassword(data.password),
  //   role: "normal",
  //   is_active: true,
  //   verified: false,
  // })
  return newUser;
};

const editUser = async (userId, data, userRol) => {
  let res = null
  const { id, password, verified, roleId, ...restOfProperties } = data;
  if ("5ee551ed-7bf4-44b0-aeb5-daaa824b9473" === userRol) {//admin
    res = await Users.update(
      { ...restOfProperties, roleId },
      { where: { id: userId } }
    )
  } else {
    res = await Users.update(
      restOfProperties, 
      { where: { id: userId },}
    )
  }
  return res
};

const deleteUser = async (id) => {
  const UserDeleted = await Users.destroy({
    where: {
      id: id,
    },
  });
  return UserDeleted;
}

const getUserByEmail = async (email) => {
  const user = await Users.findOne({
    where: { email },
    attributes: {
      exclude: ["createdAt", "updatedAt", "roleId"],
    },
  });
  return user;
  //? select * from users where email = ${email};
}

const editProfileImg = async (userID, imgUrl) => {
  const data = await Users.update(
    {
      profileImage: imgUrl,
    },
    {
      where: { id: userID },
    }
  );
  return data;
}

const getUserWithRole = async (userId) => {
  const data = await Users.findOne({
    where: {
      id: userId,
    },
    include: {
      model: Roles,
      as: "role",
      attributes: {
        exclude: ["id", "createdAt", "updatedAt"],
      },
    },
    attributes: {
      exclude: ["roleId", "createdAt", "updatedAt", "password"],
    },
  });
  return data;
}

const getCommentsByUserId = async (UserId) => {
  const res = await posts.findAll({
    where: { userId:UserId }
  });
  return res;
};
module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  editUser,
  deleteUser,
  getUserByEmail,
  editProfileImg,
  getUserWithRole,
  getCommentsByUserId
}