const mongoose = require("mongoose");

//connect mongodb
mongoose.connect(
  "mongodb+srv://umairshahbaz420:n7OI19xc1GYYTIbQ@cluster0.leq3ige.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
