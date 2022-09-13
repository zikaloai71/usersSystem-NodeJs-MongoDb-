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
}

module.exports = User;
