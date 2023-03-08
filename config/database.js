const mongoose = require("mongoose");

// const { MONGO_URI } = process.env;

const password = "Lamide125";

exports.connect = () => {
  // Connecting to the database
  mongoose
    .connect(
      `mongodb+srv://Lammy125:${password}@cluster0.tnjqhy1.mongodb.net/?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        //   useCreateIndex: true,
        //   useFindAndModify: false,
      }
    )
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
};
