import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";
// const corsOpts = {
//   origin: "*",
//   methods: ["GET", "POST"],
//   allowedHeaders: ["Content-Type"],
// };

const App = express();

App.use(express.json({ limit: "30mb", extended: true }));
App.use(express.urlencoded({ limit: "30mb", extended: true }));
App.use(cors());

App.use("/posts", postRoutes);

//Cloud mongo atlas cluster hosted at https://cloud.mongodb.com/

const CONNECTION_URL =
  "mongodb+srv://hkwarui:28582027@cluster0.lfrb4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    App.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);
