const mongoose = require("mongoose")

const UserDetailsSchema = new mongoose.Schema(
    {
      firstName: String,
      lastName: String,
      email: { type: String, unique: true },
      hashedPassword: String,
    },
    {
      collection: "Users",
    }
  );

  mongoose.model("Users", UserDetailsSchema);
