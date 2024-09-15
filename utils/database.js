const mongoose = require("mongoose");

const { MONGODB_URL } = process.env;



exports.connect = () => {
  mongoose
    .connect("mongodb+srv://ybansal961:jk4GYJkSBUG5jmUJ@cluster0.nkft5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
      console.log("DB Connection Success");
    })
    .catch((err) => {
      console.log("DB Connection Failed");
      console.log(err);
      process.exit(1);
    });
};
