const express = require("express"); // Node npm
const path = require("path");
const server = express(); // server
const PORT = 4000;

server.use(express.json());

server.listen(PORT, () => {
  console.log("Server Running on PORT", PORT);
});

const users = [
  // Array of users
  // { id: 1, name: "Merciyal" },
  // { id: 2, name: "Inthu" },
  // { id: 3, name: "Hathija" },
  // { id: 4, name: "Shalin" },
  //   { id: 5, name: "Manasiga" },
  //   { id: 6, name: "Mega" },
];
// GET / Render the home page
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
      return users.find((id) => user.id === id);
    },
    create: function (user) {
      users.push(user);
    },
    update: function (id, name) {
      users.find((user) => {
        if (user.id === id) {
          user.name = name;
        }
        return users;
      });
    },
  },
};

server.get("/users", (req, res) => {
  console.log("\n Get users");
  const result = db.users.findAll(); // find all (find all recoreds from user)
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
