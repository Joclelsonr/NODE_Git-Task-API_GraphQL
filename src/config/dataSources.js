const GitHubService = require("../services/GitHub.service");
const TasksRegisterService = require("../services/TasksRegisterService");
const UserRegisterService = require("../services/UserRegisterService");
const Generator = require("../helpers/Gerenator");

module.exports = () => ({
  gitHubService: GitHubService,
  userRegisterService: UserRegisterService,
  tasksRegisterService: TasksRegisterService,
  generatorToken: Generator,
});
