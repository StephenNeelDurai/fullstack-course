const express = require("express"); // Node npm
const path = require("path");
const server = express(); // server
const PORT = 4000;

server.use(express.json());

server.listen(PORT, () => {
  console.log("Server Running on PORT", PORT);
});
//shalin ,10 minutes ago done
let users = [
  // array.find -> first matching value (single)
  // array.filter ->  matching all value ([])
  // Array of users
  { id: 1, place: "UAE", section: "A", name: "Merciyal" },
  { id: 2, place: "UAE", section: "A", name: "Inthu" },
  { id: 3, place: "SPAIN", section: "A", name: "Hathija" },
  { id: 4, place: "UAE", section: "A", name: "Shalin" },
  { id: 5, place: "UAE", section: "A", name: "Manasiga" },
  { id: 6, place: "SPAIN", section: "A", name: "Mega" },
];
// GET / Render to the home page 2
server.get("/", (req, res) => {
  console.log("\n GET /");
  console.log("\n dirname", __dirname);
  const fileName = "home.html";
  const filePath = path.join(__dirname, fileName);
  res.sendFile(filePath); // sending html p tag
});

// GET /profile
server.get("/profile", (req, res) => {
  console.log("\n GET /profile");
  res.send(users); // send data
});

// POST
server.post("/profile", (req, res) => {
  console.log("\n POST /profile", req.body);
  const newUser = { id: req.body.id, name: req.body.name };
  users.push(newUser); // Array.push
  res.send(users);
});

// In memory

const db = {
  users: {
    findAll: function () {
      return users;
    },
    findById: function (id) {
      // array.find js
      return users.find((user) => user.id === id);
    },
    create: function (user) {
      users.push(user);
    },
    update: function (id, name) {
      users = users.map((user) => {
        if (user.id === id) {
          console.log("\n Updating user", id, name);
          user.name = name;
        }
        return user;
      });
    },
    delete: function (id) {
      users = users.filter((user) => user.id !== id);
      return users;
    },
  },
};

server.get("/profiles", (req, res) => {
  console.log("\n Get users list");
  const result = db.users.findAll(); // find all (find all recoreds from user)
  res.send({
    staus: "success",
    data: result,
  });
});

server.get("/profiles/:id", (req, res) => {
  // /profiles/1
  console.log("\n Get single user", req.params);
  // parseInt('1') parseFloat
  const result = db.users.findById(parseInt(req.params.id)); // find all (find all recoreds from user)
  console.log({ result });
  res.send({
    staus: "success",
    data: result,
  });
});

server.post("/register", (req, res) => {
  const user = req.body.user; // id, name
  console.log("\n Register user", req.body.user); // Create new user
  db.users.create(user);
  res.send({
    staus: "success",
  });
});

server.patch("/profiles/:id", (req, res) => {
  console.log("\n  Update user", req.params.id, req.body.user);
  const result = db.users.update(parseInt(req.params.id), req.body.user.name); // find all (find all recoreds from user)
  res.send({
    staus: "success",
    data: result,
  });
});
server.delete("/profiles/:id", (req, res) => {
  console.log("\n Delete single user", req.params.id);
  db.users.delete(parseInt(req.params.id)); // find all (find all recoreds from user)
  res.send({
    staus: "success",
  });
});
