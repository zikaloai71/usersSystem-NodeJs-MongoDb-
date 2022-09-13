const router = require("express").Router();
const User = require("../controllers/user.controllers");
router.get("/", User.index);

router.get("/add", User.add);

router.get("/getAddLogic", User.getAddLogic);

module.exports = router;
