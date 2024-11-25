const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors");
const mondodbmiddy = require("./middlewares/databaseConnect");
const serviceAccount = require("./accountServiceKey.json");
const tutors = require("./routes/tutorRoutes");
const express = require("express");
require("dotenv").config();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const app = express();
app.use(cors({origin: true}));

app.use(mondodbmiddy);

app.use("/tutors", tutors);

exports.app = functions.https.onRequest(app);
