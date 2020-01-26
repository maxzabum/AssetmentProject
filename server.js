const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const users = require("./server/routes/api/users");
const types = require("./server/routes/api/types");
const rooms = require("./server/routes/api/rooms");
const assets = require("./server/routes/api/assets");
const auth = require("./server/routes/api/auth");
const fixAsset = require("./server/routes/api/fixAsset");
const owners = require("./server/routes/api/owners");
const app = express();
const path = require("path");
const cors = require("cors");

const morgan = require("morgan");
const config = require("config");
app.use(bodyParser.json());

const db = config.get("mongoURI");
const port = process.env.PORT || 5000;
//add other middleware
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
mongoose
  .connect(process.env.MONGODB_URI || db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("MongoDB Connected.."))
  .catch(err => console.log(err));
//Use Routes
app.use("/api/users", users);
app.use("/api/owners", owners);
app.use("/api/types", types);
app.use("/api/rooms", rooms);
app.use("/api/assets", assets);
app.use("/api/fixAsset", fixAsset);
app.use("/api/auth", auth);
app.use("/uploads", express.static("uploads"));

//SERV static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, console.log(`Server started on port ${port}`));
