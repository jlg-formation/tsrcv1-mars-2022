import express from "express";
import serveIndex from "serve-index";
const app = express();
const port = 3000;
const dir = "./public";

app.use((req, res, next) => {
  console.log("url", req.url);
  next();
});

app.use(express.static(dir));
app.use(serveIndex(dir, { icons: true }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
