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

// test route
router.get('/', async (req, res) => {
  const users = await User.find({})
  res.json(users);
});

// signup route
router.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const encryptedpassword = await bcrypt.hashSync(password);
  try {
    const user = await User.findOne({ email });

    if (user) {
      return res.send({ error: "User already exists with that email" });
    }
    await User.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      hashedPassword: encryptedpassword,
    });
    const token = jwt.sign({ email: email }, process.env.JWT_SECRET, {
      expiresIn: 800,
    })

    res.json({ status: "ok", token: token });
  } catch (error) {
    res.send({ status: error });
  }
});


router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email })
  if (user) {
    if (await bcrypt.compare(password, user.hashedPassword)) {
      const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
        expiresIn: 800,
      });

      if (res.status(201)) {
        return res.json({ status: "ok", token: token });
      } else {
        return res.json({ error: "error" });
      }
    }
  }
  return res.json({ status: "error", error: "Invalid Credentials"})
});

module.exports = router;
