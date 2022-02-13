const mongoose = require('mongoose');

// console.log(process.env.MONGODB_URI)
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/iso-meals',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
