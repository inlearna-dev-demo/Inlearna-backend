const mongoose = require("mongoose");
const {defineString} = require("firebase-functions/params");

const uri = defineString("URI");

let isConnected = false;

/**
 * Initializes the MongoDB connection.
 * @return {Promise} Resolves when the database connection is established.
 */
async function initializedb() {
  if (isConnected) {
    console.log("Reusing existing MongoDB connection");
    return Promise.resolve();
  }

  const connectionString = uri.value();

  return new Promise((resolve, reject) => {
    mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = mongoose.connection;

    db.on("error", (err) => {
      console.error("MongoDB connection error:", err);
      isConnected = false;
      reject(err);
    });

    db.once("open", () => {
      console.log("Connected to the MongoDB database");
      isConnected = true;
      resolve();
    });
  });
}

module.exports = {initializedb};
