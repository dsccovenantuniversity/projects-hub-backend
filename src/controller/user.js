const prisma = require("../config/prisma");

const createUser = async (userData) => {
  //receives an object data
  try {
    await prisma.user.create({
      data: userData,
    });
    return "user created successfully";
  } catch (error) {
    return error;
  }
};

const findUserbyMail = async (email) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    return user;
  } catch (error) {
    return error;
  }
};

const findUserbyId = async (id) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    return user;
  } catch (error) {
    return error;
  }
};
const updateUserDetails = async (id, data) => {
  try {
    const user = await prisma.user.update({
      where: {
        id: id,
      },
      data: { data },
    });
    return user;
  } catch (error) {
    return error;
  }
};
const deleteUser = async (id, data) => {
  try {
    const user = await prisma.user.delete({
      where: {
        id: id,
      },
      data: { data },
    });
    return user;
  } catch (error) {
    return error;
  }
};
module.exports = {
  createUser,
  findUserbyMail,
  findUserbyId,
  updateUserDetails,
  deleteUser,
};
