const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
//Users Model
const Rooms = require("../../models/Room");
// @route GET api/users
// @desc GET All items
// @access Public
router.get("/", (req, res) => {
  Rooms.find()
    .sort({ date: -1 })
    .then(rooms => res.json(rooms));
});
// @route GET api/users
// @desc GET All items
// @access Public
router.post("/", auth, (req, res) => {
  const newRoom = new Rooms({
    rName: req.body.rName,
    rtypeID: req.body.rtypeID,
    rStatus: req.body.rStatus
  });
  newRoom.save().then(item => res.json(item));
});
router.delete("/:id", auth, (req, res, next) => {
  console.log(req.file);
  Rooms.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});
router.patch("/:id", auth, (req, res, next) => {
  const id = req.params.id;
  const newRoom = new Rooms({
    _id: id,
    rID: req.body.rID,
    rName: req.body.rName,
    rtypeID: req.body.rtypeID,
    rStatus: req.body.rStatus
  });
  for (const [rID, rName, rtypeID, rStatus] of Object.entries(newRoom)) {
    console.log("sadasdasd", rID, rName, rtypeID, rStatus);
  }
  Rooms.update({ _id: id }, { $set: newRoom })
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
// @route GET api/users
// @desc GET All items
// @access Public

module.exports = router;
