const express = require("express");
const router = express.Router();
const multer = require("multer");
const auth = require("../../middleware/auth");
//Storage img funtion
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb(null, false);
    }
  }
});

//Users Model
const Assets = require("../../models/Asset");
// @route GET api/users
// @desc GET All items
// @access Public
router.get("/", (req, res) => {
  Assets.find()
    .sort({ date: -1 })
    .then(assets => res.json(assets));
});
// @route GET api/users
// @desc GET All items
// @access Public
router.get("/:id", async (req, res) => {
  console.log(req.params.id);
  Assets.findById(req.params.id).then(user => res.json(user));
});
router.post("/", (req, res, next) => {
  console.log("sdasdJA", req.body.aName);
  const rawStatus = req.body.aStatus;
  const rawGet = req.body.aGet;
  const stat = 0;
  if (rawGet == "ซื้อ") {
    rawGet = 0;
    stat = 1;
  } else if (rawGet == "บริจาค") {
    rawGet = 1;
    stat = 1;
  }
  if (rawStatus == "ปกติ") {
    stat = 1;
    rawGet = 0;
  } else if (rawStatus == "ชำรุด") {
    stat = 1;
    rawGet = 1;
  } else if (rawStatus == "เสื่อมสภาพ") {
    stat = 1;
    rawGet = 1;
  } else if (rawStatus == "ส่งซ่อม") {
    stat = 1;
    rawGet = 1;
  } else if (rawStatus == "แทงจำหน่าย") {
    stat = 1;
    rawGet = 1;
  }
  if (stat == 0) {
    const newAsset = new Assets({
      aName: req.body.aName,
      aSerial: req.body.aSerial,
      aPrice: req.body.aPrice,
      aStatus: req.body.aStatus,
      aDate: req.body.aDate,
      aPrice: req.body.aPrice,
      aReason: req.body.aReason,
      aGet: req.body.aGet,
      cID: req.body.cID,
      pID: req.body.pID,
      rID: req.body.rID

      // aQR: req.file.path,
    });
    newAsset.save().then(item => res.json(item));
  } else {
    const newAsset = new Assets({
      aName: req.body.aName,
      aSerial: req.body.aSerial,
      aPrice: req.body.aPrice,
      aStatus: rawStatus,
      aDate: req.body.aDate,
      aPrice: req.body.aPrice,
      aReason: req.body.aReason,
      aGet: rawGet,
      cID: req.body.cID,
      pID: req.body.pID,
      rID: req.body.rID

      // aQR: req.file.path,
    });
    newAsset.save().then(item => res.json(item));
  }
});
// @route GET api/users
// @desc GET All items
// @access Public
router.delete("/:id", auth, (req, res, next) => {
  console.log(req.file);
  Assets.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});
// router.get("/:id", (req, res, next) => {
//   console.log(req.params.id);
//   Assets.findById(req.params.id)
//     .then(item => item.remove().then(() => res.json({ success: true })))
//     .catch(err => res.status(404).json({ success: false }));
// });
router.patch("/:id", (req, res, next) => {
  const id = req.params.id;
  const newAsset = new Assets({
    _id: id,
    aSerial: req.body.aSerial,
    aName: req.body.aName,
    aDate: req.body.aDate,
    aStatus: req.body.aStatus,
    aPrice: req.body.aPrice,
    aReason: req.body.aReason,
    aGet: req.body.aGet,
    pID: req.body.pID,
    cID: req.body.cID,
    rID: req.body.rID,
    date: Date.now
  });
  for (const [
    aSerial,
    aName,
    aDate,
    aStatus,
    aPrice,
    aReason,
    aGet,
    pID,
    cID,
    rID,
    date
  ] of Object.entries(newAsset)) {
    console.log(
      "sadasdasd",
      aSerial,
      aName,
      aDate,
      aStatus,
      aPrice,
      aReason,
      aGet,
      pID,
      cID,
      rID,
      date
    );
  }
  Assets.update({ _id: id }, { $set: newAsset })
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
//aQR: req.file.pathupload.single("aQR"),
module.exports = router;
