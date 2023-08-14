const mongoose = require("mongoose");
const chalk = require("chalk");
const config = require("config");

const NAME = config.get("DB_NAME");
const PASSWORD = config.get("DB_PASSWORD");

// does not work with variables, but when you put the actual userName and password, its working//

mongoose
  .connect(
    `mongodb+srv://${NAME}:${PASSWORD}@cluster0.fzljkal.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log(chalk.magentaBright("connected to MongoDB Atlas!")))
  .catch((error) =>
    console.log(chalk.redBright.bold(`could not connect to mongoDb: ${error}`))
  );
