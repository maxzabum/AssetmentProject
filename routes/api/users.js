const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const auth = require("../../middleware/auth");
const jwt = require("jsonwebtoken");
//Users Model
const Users = require("../../models/User");
// @route GET api/users
// @desc GET All items
// @access Public
router.get("/", (req, res) => {
  Users.find()
    .sort({ date: -1 })
    .then(user => res.json(user));
});
// @route GET api/users
// @desc GET All items
// @access Public
router.post("/", (req, res) => {
  bcrypt.hash(req.body.mPassword, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({
        error: err.message
      });
    } else {
      const newUser = new Users({
        mUsername: req.body.mUsername,
        mPassword: hash,
        mStatus: req.body.mStatus,
        mName: req.body.mName,
        mTell: req.body.mTell,
        mPer: req.body.mPer
      });
      newUser.save().then(item => res.json(item));
    }
  });
});
// @route GET api/users
// @desc GET All items
// @access Public
router.delete("/:id", async (req, res) => {
  console.log(req.params.id);
  Users.findById(req.params.id).then(item =>
    item
      .remove()
      .then(() => res.json({ success: true }))
      .catch(err => res.status(404).json({ success: false }))
  );
});
router.get("/:id", async (req, res) => {
  console.log(req.params.id);
  Users.findById(req.params.id).then(user => res.json(user));
});

router.patch("/:id", (req, res, next) => {
  const id = req.params.id;
  bcrypt.hash(req.body.mPassword, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({
        error: err.message
      });
    } else {
      const newUser = new Users({
        _id: id,
        mUsername: req.body.mUsername,
        mPassword: hash,
        mName: req.body.mName,
        mTell: req.body.mTell,
        mPer: req.body.mPer,
        mStatus: req.body.mStatus,
        mGender: req.body.mGender,
        mMail: req.body.mMail,
        mPic: req.body.mPic,
        date: Date.now()
      });
      newUser.save().then(item => res.json(item));
      Users.update({ _id: id }, { $set: newUser })
        .exec()
        .then(result => {
          console.log(result);
          res.status(200).json(result);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({
            error: err
          });
        });
    }
  });
});
module.exports = router;
