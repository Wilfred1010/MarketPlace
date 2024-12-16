const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const productsroutes = require("./routes/productsroutes"); 

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", productsroutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to DressStore application." });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
