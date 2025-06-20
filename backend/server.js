const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();



app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/api/items", require("./routes/itemRoutes"));
app.use("/api/enquire", require("./routes/enquireRoute"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    app.listen(5000, () => console.log("🚀 Server running on port 5000"))
  )
  .catch((err) => console.error("❌ MongoDB connection failed:", err));
