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
    .then(users => res.json(users));
});
// @route GET api/users
// @desc GET All items
// @access Public
router.post("/", (req, res) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({
        error: err
      });
    } else {
      const newUser = new Users({
        mUsername: req.body.username,
        mPassword: hash,
        mName: req.body.mName,
        mTel: req.body.mTel,
        mMail: req.body.mMail,
        mGender: req.body.mGender,
        mStatus: req.body.mStatus,
        mPic: req.body.mPic,
        mPermission: req.body.mPermission
      });
      newUser.save().then(item => res.json(item));
    }
  });
});
// @route GET api/users
// @desc GET All items
// @access Public
router.delete("/:id", (req, res, err) => {
  Users.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.this.status(404).json({ success: false }));
});

router.get("/:username", (req, res, next) => {
  Users.findById(req.params.username)
    .then(item =>
      item
        .find()
        .sort({ date: -1 })
        .then(users => res.json(users))
    )
    .catch(err => res.status(404).json({ success: false }));
});

router.patch("/:id", auth, (req, res, next) => {
  const id = req.params.id;
  const newUser = new Users({
    _id: id,
    mUsername: req.body.username,
    mPassword: hash,
    mName: req.body.mName,
    mTel: req.body.mTel,
    mMail: req.body.mMail,
    mGender: req.body.mGender,
    mStatus: req.body.mStatus,
    mPic: req.body.mPic,
    mPermission: req.body.mPermission,
    date: Date.now()
  });
  // for (const [rID, rName, rtypeID, rStatus] of Object.entries(newUser)) {
  //   console.log("sadasdasd", rID, rName, rtypeID, rStatus);
  // }
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
});
module.exports = router;
