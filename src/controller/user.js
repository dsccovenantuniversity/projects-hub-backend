const prisma = require("../config/prisma");

const createUser = async (userData) => {
  //receives an object data
  try {
    await prisma.user.create({
      data: userData,
    });
    return("user created successfully")
  } catch (error) {
    return(error);
  }
};

const findUserbyMail = async(email) => {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  };