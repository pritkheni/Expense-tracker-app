const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const colors = require("colors");
const morgan = require("morgan");
const connectDb = require("./config/db");
const path = "./config/config.env";
dotenv.config({ path: path });
connectDb();

const transactions = require("./routes/transactions");

const app = express();
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/trasactions", transactions);

const PORT_NUMBER = process.env.PORT || 5000;

app.listen(PORT_NUMBER, () => {
  console.log(
    `listening on port ${PORT_NUMBER}\nvisit: http://localhost:${PORT_NUMBER}/`
      .yellow.bold
  );
});
