const myConnection = require("./myConnection");
const { ObjectId } = require("mongodb");
class User {
  static index = (req, res) => {
    myConnection((db) => {
      db.collection("users")
        .find()
        .toArray((e, result) => {
          if (e) return console.log(e.message);
          res.render("home", {
            pageTitle: "home page",
            result,
            noUsers: result.length === 0 ? true : false,
          });
        });
    });
  };

  static add = (req, res) => {
    res.render("add", {
      pageTitle: "add page",
    });
  };

  static getAddLogic = (req, res) => {
    let user = { ...req.query };

    myConnection((db) => {
      db.collection("users")
        .insertOne(user)
        .then(res.redirect("/"))
        .catch((e) => console.log(e.message));
    });
  };
  static single = (req, res) => {
    myConnection((db) => {
      db.collection("users")
        .findOne({ _id: new ObjectId(req.params.id) })
        .then((user) => {
          res.render("single", {
            pageTitle: "single user",
            user,
          });
        })
        .catch((e) => console.log(e.message));
    });
  };

  static delete = (req, res) => {
    myConnection((db) => {
      db.collection("users")
        .deleteOne({ _id: new ObjectId(req.params.id) })
        .then(res.redirect("/"))
        .catch((e) => console.log(e.message));
    });
  };
  static toggle = (req, res) => {
    myConnection((db) => {
      db.collection("users")
        .findOne({ _id: new ObjectId(req.params.id) })
        .then((user) => {
          db.collection("users").updateOne(
            { _id: new ObjectId(req.params.id) },
            { $set: { activeStatus: user.activeStatus ? "" : "on" } }
          );
          res.redirect("/");
        })
        .catch((e) => console.log(e.message));
    });
  };

  static edit = (req, res) => {
    myConnection((db) => {
      db.collection("users")
        .findOne({ _id: new ObjectId(req.params.id) })
        .then((user) => {
          res.render("edit", {
            pageTitle: "edit",
            user,
          });
        })
        .catch((e) => console.log(e.message));
    });
  };

  static editPost = (req, res) => {
    myConnection((db) => {
      db.collection("users")
        .updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body })
        .then(res.redirect(`/single/${req.params.id}`))
        .catch((e) => console.log(e.message));
    });
  };
}

module.exports = User;
