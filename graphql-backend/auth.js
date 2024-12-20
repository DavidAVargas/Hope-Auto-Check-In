const jwt = require("jsonwebtoken")

const generateToken = (user) => {
  try {
    return jwt.sign(
      {
        id: user.id,
        userName: user.userName,
        role: user.role
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
  } catch (error) {
    console.error("Error generating token:", error);
    throw new Error("Token generation failed");
  }
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    console.error("Error verifying token:", error);
    throw new Error("Token verification failed");
  }
};

const decodeToken = (token) => {
    try {
      const decoded = jwt.decode(token, { complete: true });
      return decoded;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  };

  module.exports = { generateToken, verifyToken, decodeToken };