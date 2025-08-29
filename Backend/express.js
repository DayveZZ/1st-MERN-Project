const epxress = require("express");
const app = epxress();
const cors = require("cors");
const userData = require("../MOCK_DATA.json");

const allowOrigin = ["http://localhost:5173"];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowOrigin.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
