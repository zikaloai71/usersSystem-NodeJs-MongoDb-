const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const myViews = path.join(__dirname, "frontend/views");
const myLayouts = path.join(__dirname, "frontend/layouts");
const myStatics = path.join(__dirname, "frontend/public");
app.use(express.static(myStatics));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "hbs");
app.set("views", myViews);
hbs.registerPartials(myLayouts);
const userRouter = require("./routes/userRoutes");
app.use("/", userRouter);
app.all("*", (req, res) => {
  res.render("err404", {
    pageTitle: "not found page",
  });
});

app.listen(3000, () =>
  console.log("link is" + "  " + "http://localhost:3000/")
);

