import mysql from "mysql2/promise";

let connection = null;

try {
  // create the connection to database
  console.log("\n Trying to connect db...");
  connection = await mysql.createConnection({
    host: "localhost", // 127.0.0.1 // 0.0.0.0 // ip
    user: "root",
    database: "future_stack",
    password: "Bingo@123",
  });

  console.log("\n DB Connection success");

  //   await insertNewUser(connection);

  const [users] = await connection.execute("SELECT * FROM `Users`");

  console.log("\n DB Query success", users);
} catch (err) {
  console.log("\n ***************************");
  console.log("Connection Issue: ", err);
  console.log("\n ***************************");
}

async function insertNewUser(connection) {
  const [updatedUsers] = await connection.execute(
    `INSERT INTO Users VALUES(3,"Shalin", "UK")`,
  );
  return;
}

// // Close the connection
// await connection.end();
// console.log("Hi Indhu");
// console.log("Hi Vidhya");
// console.log("Hi Mans");
