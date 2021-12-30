const express = require("express");
const db = require("./models");
const app = express();
const port = process.env.PORT || 3000;

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.use(express.json());

require("./routes/users")(app);
// require("./routes/courses")(app);
// require("./routes/participants")(app);
require("./routes/questions")(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
