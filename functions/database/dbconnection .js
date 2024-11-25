const mongoose = require("mongoose");
const {defineString} = require("firebase-functions/params");

const uri = defineString("URI");
const connectionString = uri.value();

/**
 * Initializes the MongoDB connection.
 * @return {Promise} Resolves when the database connection is established.
 */
async function initializedb() {
  return new Promise((resolve, reject) => {
    mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = mongoose.connection;
    db.on("error", (err) => {
      console.error("MongoDB connection error:", err);
      reject(err);
    });

    db.once("open", () => {
      console.log("Connected to the MongoDB database");
      resolve();
    });
  });
}

module.exports = {initializedb};
