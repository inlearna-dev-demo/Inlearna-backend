const db = require("../database/dbconnection ");

const mondodbmiddy = async (req, res, next) => {
  try {
    await db.initializedb();
    console.log("MongoDB connected successfully!");
    next();
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err.message);
    res.status(500).send("Database connection error");
  }
};

module.exports = mondodbmiddy;
