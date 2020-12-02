const User = require("../models/user");
const Exercise = require("../models/")
const bcrypt = require('bcrypt');

module.exports.register = async function (req, res) {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password,10);
    console.log(hashedPassword);
    req.body.password = hashedPassword;
    const user = await User.create(req.body);
    console.log({ user });

    return res.send({ user });
  } catch (err) {
    return res.status(400).send(err);
  }
};