// Export mongoose
const mongoose = require("mongoose");
require("dotenv").config();

//Assign MongoDB connection string to Uri and declare options settings
var uri = process.env.DATABASE_URL;

// Declare a variable named option and assign optional settings
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Connect MongoDB Atlas using mongoose connect method
mongoose.connect(uri, options).then(
  () => {
    console.log("Database connection established!");
  },
  (err) => {
    {
      console.log("Error connecting Database instance due to:", err);
    }
  }
);
