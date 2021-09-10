var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi, there!",
    user: "Isabel",
    added: new Date(),
  },
  {
    text: "Helloo!",
    user: "John",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Hhhhome", messages: messages });
});

/* Form handler */
router.post("/new", function (req, res, next) {
  messages.push({
    text: req.body.messageText,
    user: req.body.messageUser,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
