const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
//Users Model
const Types = require("../../models/Type");
// @route GET api/users
// @desc GET All items
// @access Public
router.get("/", (req, res) => {
  Types.find()
    .sort({ date: -1 })
    .then(types => res.json(types));
});
// @route GET api/users
// @desc GET All items
// @access Public
router.post("/", (req, res) => {
  const newType = new Types({
    cID: req.body.cID,
    cName: req.body.cName,
    cStatus: req.body.cStatus
  });
  newType.save().then(item => res.json(item));
});
// @route GET api/users
// @desc GET All items
// @access Public
router.patch("/:id", auth, (req, res, next) => {
  const id = req.params.id;
  const newType = new Types({
    _id: id,
    cID: req.body.cID,
    cName: req.body.cName,
    cStatus: req.body.cStatus
  });
  for (const [cID, cName, cStatus] of Object.entries(newType)) {
    console.log("sadasdasd", cID, cName, cStatus);
  }
  Types.update({ _id: id }, { $set: newType })
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
