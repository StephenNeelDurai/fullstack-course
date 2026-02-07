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
  { id: 1, name: "Merciyal" },
  { id: 2, name: "Inthu" },
  { id: 3, name: "Hathija" },
  { id: 4, name: "Shalin" },
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
