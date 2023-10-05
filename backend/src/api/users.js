const express = require('express');
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

mongoose
  .connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => console.log(error));

  require("../userDetails");
  const User = mongoose.model("Users")


  router.get('/', (req, res) => {

    res.json(['😀', '😳', '🙄']);
  });

  router.post("/signup", async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    const encryptedpassword = await bcrypt.hash(password, 10);
    try {
      const oldUser = await User.findOne({ email });

      if (oldUser) {
        return res.send({ error: "User already exists with that email" });
      }
      await User.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: encryptedpassword,
      });
      res.send({ status: "ok" });
    } catch (error) {
      res.send({ status: error });
    }
  });

module.exports = router;
