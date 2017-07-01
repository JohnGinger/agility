import * as express from "express";
var morgan = require("morgan");

const app = express();
app.use(morgan("combined"));

type req = express.Request;
type res = express.Response;

app.get("/", function(req: req, res: res) {
  res.send("Hello World!");
});

app.listen(4000, function() {
  console.log("Example app listening on port 4000!");
});
