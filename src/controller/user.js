const prisma = require("../config/prisma");

const createUser = async (userData) => {
  //receives an object data
  try {
    await prisma.user.create({
      data: {
        first_name: "Oluwademiladeogo",
        last_name: "Bickersteth",
        email: "bickerstethdemilade@gmail.com",
        username: "Oluwademiladeogo",
        google_provider_id: "nil",
        profile_image: "nil",
        password: "Oluwademilade",
      },
    });
    return("user created successfully")
  } catch (error) {
    return(error);
  }
};

