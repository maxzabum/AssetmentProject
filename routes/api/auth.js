const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
//Users Model
const Users = require("../../models/User");
const auth = require("../../middleware/auth");
// @route GET api/auth
// @desc Auth user
// @access Public

// @route GET api/users
// @desc GET All items
// @access Public
router.delete("/:id", (req, res, err) => {
  Users.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.this.status(404).json({ success: false }));
});

router.post("/", (req, res) => {
  const { mUsername, mPassword } = req.body;

  console.log("d2dd55" + req.body.mUsername);
  if (!req.body.mUsername || !req.body.mPassword) {
    return res.status(400);
  }

  Users.findOne({ mUsername }).then(user => {
    if (!user) return res.status(400);

    bcrypt.compare(mPassword, user.mPassword).then(isMatch => {
      if (!isMatch) return res.status(404);

      jwt.sign(
        { id: user.id },
        config.get("jwtSecret"),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user: {
              id: user.id,
              mUsername: user.mUsername,
              mName: user.mName,
              mStatus: user.mStatus
            }
          });
        }
      );
    });
  });
});
router.post("/login", (req, res, next) => {
  Users.find({ mUsername: req.body.mUsername })
    .exec()
    .then(user => {
      console.log(user);
      if (user.length < 1) {
        return res.status(401).json({
          message: "Username incorrect"
        });
      }
      bcrypt.compare(req.body.mPassword, user[0].mPassword, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "Auth fail"
          });
        }
        if (result) {
          return res.status(200).json({
            message: "Auth successful"
          });
        }
        res.status(401).json({
          message: "Auth failed"
        });
      });
    });
});
router.get("/user", auth, (req, res) => {
  Users.findById(req.user.id)
    .select("-password")
    .then(user => res.json(user));
});
module.exports = router;
