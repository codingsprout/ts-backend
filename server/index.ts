import dotenv from "dotenv";
dotenv.config();

import express from "express";

// import routes from "./routes";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Database

// app.use("/api", routes.authRouter);

import "./config/database";

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
