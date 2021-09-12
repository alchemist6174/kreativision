const express = require("express");
const path = require("path");
require("dotenv").config();

// Application Config
const appPort = process.env.PORT || 5000;
const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client", "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

const start = async () => {
  try {
    await app.listen(appPort, () => {
      console.log(`KreatiVision Project Started on Port: ${appPort}`);
    });
  } catch (error) {
    console.log("Start Up Failed. Check Error Below");
    log;
  }
};

start();
