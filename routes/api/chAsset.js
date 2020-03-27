const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
//Users Model
const ChAsset = require("../../models/CheckAsset");
// @route GET api/users
// @desc GET All items
// @access Public
router.get("/", (req, res) => {
  ChAsset.find()
    .sort({ date: -1 })
    .then(types => res.json(types));
});
// @route GET api/users
// @desc GET All items
// @access Public
router.post("/", (req, res) => {
  const newType = new ChAsset({
    chDate: req.body.chDate,
    chRound: req.body.chRound,
    aID: req.body.aID,
    perID: req.body.perID,
    chStatus: req.body.chStatus,
    chDetail: req.body.chDetail
  });
  newType.save().then(item => res.json(item));
});
// @route GET api/users
// @desc GET All items
// @access Public
router.patch("/:id", (req, res, next) => {
  const id = req.params.id;
  const newType = new ChAsset({
    _id: id,
    chDate: req.body.chDate,
    chRound: req.body.chRound,
    aID: req.body.aID,
    perID: req.body.perID,
    chStatus: req.body.chStatus,
    chDetail: req.body.chDetail
  });

  ChAsset.update({ _id: id }, { $set: newType })
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
