const prisma = require("../config/prisma");

const searchAllUsers = async (searchQuery) => {
  //gets all users' and sends only the username
  try {
    const user = await prisma.user.findMany({
      where: {
        username: {
          contains: searchQuery,
          mode: "insensitive",
        },
      },
      take: 10,
      select: { username: true },
    });
    console.log(user);
  } catch (error) {
    return error;
  }
};
module.exports = { searchAllUsers };