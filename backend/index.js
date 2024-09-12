const express = require("express");
const app = express();
const financialRouter = require("./routers/financial.router");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const router = require("./routers/financial.router");
const fronend_url = process.env.FRONTEND_URL;

// CORS options
const corsOptions = {
  origin: fronend_url,
};

// Use Middleware
app.use(cors(corsOptions)); // Apply CORS middleware with options
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1>Financial Tracker API</h1>"); // Added closing </h1> tag
});

//Use router
app.use("/api/v1/financial", financialRouter);

app.listen(PORT, () => {
  console.log("Listening to http://localhost:" + PORT);
});
