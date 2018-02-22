const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    userId: String,
    username: {
      type: String,
      unique: true,
      required: true
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    date: Date
  });
  
  userSchema.methods.validPassword = function( pwd ) {
    return ( this.password === pwd );
  };

mongoose.model('users', userSchema);