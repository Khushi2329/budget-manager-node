const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb://localhost:27017/myDatabaseName",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    }
  )
  .then((res) => {
    console.log("connected");
  })
  .catch((e) => {
    console.log(e, "error");
  });
