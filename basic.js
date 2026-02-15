// JSON key :id, value : {name and price}
const items = {
  1: {
    name: "Tea",
    price: 10,
  },
  2: {
    name: "Pups",
    price: 15,
  },
};

// array {id, name and price}
const arrayIteam = [
  {
    id: 1,
    name: "Tea",
    price: 10,
  },
  {
    id: 2,
    name: "coffee",
    price: 15,
  },
];

let uniqueOrderId = 500;
function createOrderId() {
  uniqueOrderId = uniqueOrderId + 1; // logic
  return uniqueOrderId;
}

function createOrder(cart) {
  console.log("Selected Items", cart.length);
  // Start
  console.log("\n ******************");
  console.log("\n Creating order...");
  console.log("\n ******************");

  const orderId = createOrderId();

  console.log("\n ******************");
  console.log("\n New order id", orderId);
  console.log("\n ******************");
  let total = 0;
  for (let index = 0; index < cart.length; index++) {
    // console.log({ index });
    const item = cart[index]; // selected input

    //select from JSON items
    // const fItem = items[item.id]; // map default items []

    // Array.find / map / reduce js maps
    const fItem = arrayIteam.find((i) => i.id == item.id);

    item.name = fItem.name;
    item.price = fItem.price;
    // Calculating total
    item.total = item.count * item.price;
    total = total + item.total;
  }

  return { orderId, items: cart, total };
}

// Tea  ☕️ + 5
// Snacks  🥠 + 3
// name, price, qty 5 ,total
const cart = [
  { id: 1, count: 5 }, // item 1
  { id: 2, count: 3 }, // item 2
];
// cart
const order = createOrder(cart); //Inthu
console.log(order);
console .log("total",order.total);
module.exports = {
  items,
  arrayIteam,
  createOrder,
  createOrderId
};

