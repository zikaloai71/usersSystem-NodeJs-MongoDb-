const router = require("express").Router();
const User = require("../controllers/user.controllers");
router.get("/", User.index);

router.get("/add", User.add);

router.get("/getAddLogic", User.getAddLogic);

router.get("/single/:id", User.single);

router.get("/delete/:id", User.delete);

router.get("/activity/:id", User.toggle);

router.get("/edit/:id", User.edit);

router.post("/edit/:id", User.editPost);

module.exports = router;
