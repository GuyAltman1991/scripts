const express = require("express");
const app = express();
const chalk = require("chalk");
const { handleError } = require("./utils/errorHandler");
const router = require("./router/router");
const cors = require("./middlewares/cors");
const logger = require("./logger/loggerService");
const connectToDb = require("./DB/dbService");
const config = require("config");
const {
  generateInitialCards,
  generateInitialUsers,
} = require("./initialData/initialDataService");

app.use(cors);
app.use(logger);
app.use(express.json());
app.use(express.text());
app.use(router);

app.use((err, req, res, next) => {
  handleError(res, 500, err.message);
});

app.get("/", (req, res) => {
  res.send("in guy app");
});

const PORT = config.get("PORT");
app.listen(PORT, () => {
  console.log(chalk.blueBright(`listening on: http://localhost:${PORT}`));
  connectToDb();
  // generateInitialCards();
  generateInitialUsers();
});
