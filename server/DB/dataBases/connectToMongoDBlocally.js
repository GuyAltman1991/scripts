const mongoose = require("mongoose");
const chalk = require("chalk");

mongoose
  .connect("mongodb://localhost:27017/scripts_app")
  .then(() => console.log(chalk.magentaBright("connected to MongoDB locally")))
  .catch((error) =>
    console.log(chalk.redBright(`could not connect to mongoDB: ${error}`))
  );
