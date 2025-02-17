//session based authentication

// const sessionIdToUserMap = new Map();

// function setUser (id,user){
//     return sessionIdToUserMap.set(id,user)
// }

// function getUser(id) {
//     return sessionIdToUserMap.get(id)
// }



//jwt based authentication
const jwt = require("jsonwebtoken");
function setUser(user) {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
      role:user.role,
    },
    process.env.JWT_SECRET_KEY
  );
}

function getUser(token) {
  if (!token) return null;
  try {
    return jwt.verify(token, process.env.JWT_SECRET_KEY);
  } catch (error) {
    return null;
  }
}

module.exports = {
  setUser,
  getUser,
};
