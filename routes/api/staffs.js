const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
//Users Model
const Staff = require("../../models/Staff");
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
// @route GET api/users
// @desc GET All items
// @access Public

module.exports = router;
