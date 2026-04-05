//  Callback
//  Promise
//  Async Await

async function createMessage(cb, close) {
  const message = `This is the message Vidhya sent at: 9:48`;
  console.log(message);
  cb();
  close();
}

async function sendMessage() {
  // sending message
  console.log("Message sent");
}

async function closeConnection() {
  // Connection closed
  console.log("Connection Closed");
}

createMessage(sendMessage, closeConnection);

// createMessage()
// .then(sendMessage).then(closeConnection);
// .then(sendMessage).then(closeConnection);
// .catch((error)=>console.error(error.message))

async function start(params) {
  const message = await createMessage();
  await sendMessage(message);
  await closeConnection();
  return;
}

start();
