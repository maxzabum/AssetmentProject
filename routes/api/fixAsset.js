const express = require("express");
const router = express.Router();
const multer = require("multer");
const auth = require("../../middleware/auth");
//Storage img funtion
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads/");
  },
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
const newFixAsset = [];
//Users Model
const FixAssets = require("../../models/FixAsset");
// @route GET api/users
// @desc GET All items
// @access Public
router.get("/", (req, res) => {
  FixAssets.find()
    .sort({ date: -1 })
    .then(Fixassets => res.json(Fixassets));
});
router.get("/:id", async (req, res) => {
  console.log(req.params.id);
  FixAssets.findById(req.params.id).then(user => res.json(user));
});
// @route GET api/users
// @desc GET All items
// @access Public
var filesUp = upload.fields([
  { name: "fPicCard", maxCount: 1 },
  { name: "fBillPic", maxCount: 1 },
  { name: "fPic", maxCount: 1 }
]);
router.post(
  "/",
  // upload.fields([
  //   { name: "fPicCard", maxCount: 1 },
  //   { name: "fBillPic", maxCount: 1 },
  //   { name: "fPic", maxCount: 1 }
  // ]),
  // upload.single("fBillPic"),
  // upload.single("fPic"),
  (req, res, next) => {
    console.log("sdasdJA", req.body);

    const newFixAsset = new FixAssets({
      aID: req.body.aID,
      fReason: req.body.fReason,
      fStatus: req.body.fStatus,
      fFixDate: req.body.fFixDate,
      fResult: req.body.fResult,
      fPrice: req.body.fPrice,
      dateVar: req.body.dateVar,
      fLocation: req.body.fLocation,
      fPic: req.body.fPic
    });
    newFixAsset.save().then(item => res.json(item));
  }
);

//
// router.post(
//   "/",
//   // upload.single("fPicCard"),
//   // upload.single("fBillPic"),
//   upload.single("fPic"),
//   (req, res, next) => {
//     console.log("sdasdJA", req.files);

//     const newFixAsset = new FixAssets({
//       fPicCard: req.file.path
//     });
//     newFixAsset.save().then(item => res.json(item));
//   }
// );
// @route GET api/users
// @desc GET All items
// @access Public
router.delete("/:id", (req, res, next) => {
  console.log(req.file);
  Assets.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

router.patch("/:id", (req, res, next) => {
  const id = req.params.id;
  const newFixAsset = new FixAssets({
    _id: id,
    fReason: req.body.fReason,
    fPic: req.body.fPic,
    fStatus: req.body.fStatus,
    fLocation: req.body.fLocation,
    fPicCard: req.body.fPicCard,
    fFixDate: req.body.fFixDate,
    fBillPic: req.body.fBillPic,
    fResult: req.body.fResult,
    fPrice: req.body.fPrice,
    aID: req.body.aID,
    dateVar: req.body.dateVar,

    date: Date.now()
  });
  for (const [
    fReason,
    fPic,
    fStatus,
    fLocation,
    fPicCard,
    fFixDate,
    fBillPic,
    fPrice,
    aID,
    dateVar,
    date
  ] of Object.entries(newFixAsset)) {
    console.log(
      "sadasdasd",
      fReason,
      fPic,
      fStatus,
      fLocation,
      fPicCard,
      fFixDate,
      fBillPic,
      fPrice,
      aID,
      dateVar,
      date
    );
  }
  FixAssets.update({ _id: id }, { $set: newFixAsset })
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
