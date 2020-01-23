const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
//Users Model
const Owner = require("../../models/Owner");
// @route GET api/users
// @desc GET All items
// @access Public
router.get("/", (req, res) => {
  Owner.find()
    .sort({ date: -1 })
    .then(owners => res.json(owners));
});
// @route GET api/users
// @desc GET All items
// @access Public
router.post(
  "/",
  /*auth,*/ (req, res) => {
    const newOwner = new Owner({
      pName: req.body.pName,
      pStatus: req.body.pStatus
    });
    newOwner.save().then(item => res.json(item));
  }
);
// @route GET api/users
// @desc GET All items
// @access Public
router.patch("/:id", auth, (req, res, next) => {
  const id = req.params.id;
  const newOwner = new Owner({
    _id: id,
    pName: req.body.pName,
    pStatus: req.body.pStatus,
    date: Date.now()
  });
  for (const [pName, pStatus, date] of Object.entries(newOwner)) {
    console.log("sadasdasd", pName, pStatus, date);
  }
  Owner.update({ _id: id }, { $set: newOwner })
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
