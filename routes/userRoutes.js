const router = require("express").Router();
const User = require("../controllers/user.controllers");
router.get("/", User.index);

router.get("/add", User.add);

router.get("/getAddLogic", User.getAddLogic);

router.get("/single/:id", User.single);

router.get("/delete/:id", User.delete);

module.exports = router;
