// const jwt = require("jsonwebtoken");

// const SECRET = "HHJJ421";
// function generateToken(payload) {
//   const token = jwt.sign(
//     {
//       exp: Math.floor(Date.now() / 1000) + 60 * 60,
//       data: payload,
//     },
//     SECRET,
//   );
//   console.log("\n New token generated");
//   console.log(token);
// }

// function veirfyToken(token) {
//   jwt.verify(token, SECRET, function (err, decoded) {
//     console.log(decoded);
//   });
// }

// const payload = { name: "NEEL" };
// generateToken(payload);

// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NzIyOTQ4MTgsImRhdGEiOnsibmFtZSI6Ik5FRUwifSwiaWF0IjoxNzcyMjkxMjE4fQ.A85CoAID-mki-GSDlPv7IsHuNEYdMl2EL1NkpDzn99Y";

// veirfyToken(token);

// const marks = [];
// // PUSH
// marks.push(101); //0
// marks.push(102); //1
// marks.push(103); //2
// marks.push(104); //3
// console.log("\n PUSH", marks);
// // POP
// const r1 = marks.pop();

// console.log("\n POP", marks);
// console.log("\n POPPED", r1);
// // LENGTH
// // INDEX

// // const length = marks.length; // 3
// // const middleIndex = Math.round(length / 2);

// // console.log("\n LENGTH", middleIndex);
// // console.log("\n INDEX", marks[middleIndex]);

// const r2 = marks.shift();
// const r3 = marks.shift();
// console.log("\n AFTER SHIFT", r2, r3);

// console.log("\n AFTER SHIFT", marks);

const inputs = [
  { icon: "🐓", amount: 100, type: "animal" },
  { icon: "🐶", amount: 700, type: "animal" },
  { icon: "🦜", amount: 500, type: "animal" },
  { icon: "🍔", amount: 150, type: "food" },
  { icon: "🌻", amount: 900, type: "plant" },
  { icon: "🌴", amount: 1000, type: "plant" },
]; // validate

let id = 0;
const idUpdatedArray = JSON.parse(JSON.stringify(inputs)).map(
  function (input, index) {
    id++; // increase the id
    input["id"] = id; // insert id value in json
    return input;
  },
);
// console.log("\n idUpdatedArray", idUpdatedArray);

const animalsArray = inputs.filter((input, index) =>
  input.type === "animal" ? true : false,
);

// console.log("\n original", inputs);
// console.log("\n animalsArray", animalsArray);

const findinAnimalsArray = inputs.find(
  (input, index) => (input.type === "animal" ? (input["icon"] = "🍗") : false), //null,false,0
);
// console.log("\n findinAnimalsArray", findinAnimalsArray);

const result = inputs.reduce((previousValue, currentValue, index) => {
  //   console.log({ previousValue });
  //   console.log({ currentValue });
  //   console.log({ index });
  return previousValue + currentValue.amount; // add
}, 0); // default, starting value

// console.log({ result });

const result2 = inputs.reduce(
  (previousValue, currentValue, index) => {
    const amount = currentValue.amount;
    if (currentValue.type === "animal") {
      previousValue.amount += amount;
      previousValue.icons.push(currentValue.icon);
    }
    return previousValue;
  },
  { type: "animal", amount: 0, icons: [] },
); // [] {}

console.log({ result2: JSON.stringify(result2) });
