const jwt = require("jsonwebtoken");
const { config } = require("dotenv");

config();

class Generator {
  createToken(id) {
    return jwt.sign({ id }, process.env.JWT_KEY, {
      expiresIn: process.env.JWT_EXPIRATION_TIME,
    });
  }

  verifyToken(token) {
    return jwt.verify(token, process.env.JWT_EXPIRATION_TIME);
  }
}

module.export = new Generator();
