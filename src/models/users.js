const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      default: 0,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },

    permissions: { type: Array, default: [] },
    branch: {
      name: {
        type: String,
      },
      code: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

// userSchema.pre('save', async function (next) {
//     const user = this;
//     if(user.isModified('password')) {
//         console.log(user, 'save works middleware');
//         user.password = await bcrypt.hash(user.password, 8);
//     }
//     next()
// })

const user = mongoose.model("User", userSchema);

module.exports = user;
