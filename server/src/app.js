const express = require("express");
const path = require("path");
const knex = require("knex")(
  require("../knexfile.js")[process.env.NODE_ENV || "development"]
);
var cookieParser = require("cookie-parser");
const {
  getAllUsers,
  getAllCategories,
  getAllSubCategories,
  getAllItems,
  getMasterInventory,
  itemsWithUsers,
} = require("./controller.js");

const app = express();
const cors = require("cors");
app.use(express.json());

// var whitelist = ["http://localhost:3000"];
const corsConfig = {
  credentials: true,
  origin: true,
};

app.use(cors(corsConfig));
app.use(cookieParser());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,DELETE,UPDATE,OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
  );
  // check if client sent cookie
  var cookie = req.cookies;
  console.log(`request `, req.cookies);
  if (cookie === undefined) {
    // no: set a new cookie
    res.cookie("darkMode", false, { maxAge: 900000 });
    console.log("cookie created successfully");
  } else {
    // yes, cookie was already present
    console.log("cookie exists", cookie);
  }
  next(); // <-- important!
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/endpoints.html"));
});

app.get("/users", (req, res) => {
  // res.cookie("darkMode", false, { maxAge: 900000 });
  getAllUsers()
    .then((data) => res.json(data))
    .catch((err) => res.status(500).send(err));
});

app.get("/categories", (req, res) => {
  getAllCategories()
    .then((data) => res.json(data))
    .catch((err) => res.status(500).send(err));
});

app.get("/subcategories", (req, res) => {
  getAllSubCategories()
    .then((data) => res.json(data))
    .catch((err) => res.status(500).send(err));
});

app.get("/items", (req, res) => {
  getAllItems()
    .then((data) => res.json(data))
    .catch((err) => res.status(500).send(err));
});

app.get("/items/:id", (req, res) => {
  return knex("item")
    .select("*")
    .where("id", "=", req.params.id)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).send(err));
});

app.get("/master", (req, res) => {
  getMasterInventory()
    .then((data) => res.json(data))
    .catch((err) => res.status(500).send(err));
});

app.get("/itemswithusers", (req, res) => {
  itemsWithUsers()
    .then((data) => res.json(data))
    .catch((err) => res.status(500).send(err));
});

app.post("/users", (req, res) => {
  return knex("users")
    .insert(req.body)
    .then((data) => res.send({ message: "We have posted a user." }))
    .catch((err) => res.status(500).send(err));
});

app.post("/category", (req, res) => {
  return knex("category")
    .insert(req.body)
    .then((data) => res.send({ message: "We have posted a category." }))
    .catch((err) => res.status(500).send(err));
});

app.post("/subcategory", (req, res) => {
  return knex("sub_category")
    .insert(req.body)
    .then((data) => res.send({ message: "We have posted a subcategory." }))
    .catch((err) => res.status(500).send(err));
});

app.post("/items", (req, res) => {
  return knex("item")
    .insert(req.body)
    .then((data) => res.send({ message: "We have posted an item." }))
    .catch((err) => res.status(500).send(err));
});

app.patch("/users/:user_name", (req, res) => {
  return knex("users")
    .where("user_name", req.params.user_name)
    .update(req.body)
    .then((data) => res.send({ message: "We have updated a user." }))
    .catch((err) => res.status(500).send(err));
});

app.patch("/items/:id", (req, res) => {
  return knex("item")
    .where("id", "=", req.params.id)
    .update(req.body)
    .then((data) => res.send({ message: "We have updated the item." }))
    .catch((err) => res.status(500).send(err));
});

app.patch("/category/:category_name", (req, res) => {
  return knex("category")
    .where("category_name", req.params.category_name)
    .update(req.body)
    .then((data) => res.send({ message: "We have updated the category." }))
    .catch((err) => res.status(500).send(err));
});

app.patch("/subcategory/:sub_category_name", (req, res) => {
  return knex("sub_category")
    .where("sub_category_name", req.params.sub_category_name)
    .update(req.body)
    .then((data) => res.send({ message: "We have updated the sub-category." }))
    .catch((err) => res.status(500).send(err));
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  knex.raw("TRUNCATE users CASCADE");
  knex("users")
    //   .where("id", "==", parseInt(id))
    .where({ id: id })
    .del()
    .then(() => res.status(200).send("deleted"))
    .catch(
      (err) => res.status(404).send(err)
      //   message: "This user does not exist! Try again.",
    );
});

app.delete("/items/:id", (req, res) => {
  const { id } = req.params;
  knex.raw("TRUNCATE items CASCADE");
  knex("item")
    //   .where("id", "==", parseInt(id))
    .where({ id: id })
    .del()
    .then(() => res.status(200).send("deleted"))
    .catch(
      (err) => res.status(404).send(err)
      //   message: "This user does not exist! Try again.",
    );
});

// app.post('/users', (req, res) => {
//     postUsers(req.body)
//         .then(data => res.json(data))
//         .catch(err => res.status(500).send(err));
//     });

app.all("*", (req, res) => {
  res.status(400).send(`<h1>Endpoint does not exist :(</h1>`);
});

module.exports = app;
