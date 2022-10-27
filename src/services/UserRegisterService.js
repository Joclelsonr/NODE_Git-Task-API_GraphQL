const { dataBase } = require("../dataBase/connection");

class UserRegisterService {
  async addUser(user) {
    return await dataBase("users").insert(user);
  }

  async getUser(login) {
    return await dataBase.select("*").from("users").where({ login });
  }
}
module.exports = new UserRegisterService();
