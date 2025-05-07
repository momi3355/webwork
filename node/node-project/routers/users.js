const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  const { email, pw } = req.body; //객체 분해 사용.
  req.session.email = email;
  req.session.save((err) => {
    if (err) throw err;
    res.send({ code: "success" });
  });
});
router.get("/info", (req, res) => {
  res.send({ email: req.session.email });
});
router.get("/logout", (req, res) => {
  req.session.destroy();
  res.send("logout");
});

module.exports = router;
