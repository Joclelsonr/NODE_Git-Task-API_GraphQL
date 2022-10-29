const Generator = require("../helpers/Generator");
const NoPermissionError = require("../errors/NoPermissionError");

module.exports = ({ req }) => {
  const token = req.headers.authorization;

  return {
    validate() {
      try {
        const { id } = new Generator().verifyToken(token);
        return id;
      } catch (error) {
        throw new NoPermissionError("Você não tem autorização!");
      }
    },
  };
};
