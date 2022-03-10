import express from "express";
import serveIndex from "serve-index";

import { api } from "./api";

const app = express();
const port = process.env.MULTIPLICATION_PORT || 3000;
const dir = "./public";

app.use((req, res, next) => {
  console.log("url", req.url);
  next();
});

app.use("/api", api);

app.use(express.static(dir));
app.use(serveIndex(dir, { icons: true }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
