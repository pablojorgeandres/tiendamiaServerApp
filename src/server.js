const express = require('express')
const cors = require('cors');
const { swaggerDocs: SwaggerDocs } = require("./docs/swagger");

const db = require('./dbContext.js');
const port = process.env.PORT || 9000

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

const itemRoutes = require("./routes/ItemRoutes");
const orderRoutes = require("./routes/OrderRoutes");
const reportRoutes = require("./routes/ReportRoutes");

app.use("/api", itemRoutes);
app.use("/api", orderRoutes);
app.use("/api", reportRoutes);

SwaggerDocs(app, port);

db(async client => {
    console.log("DB connected.")
    app.listen(port, () => console.log('Listening on: ' + port))
}).catch(e => {
  console.error(e);
  app.route('/').get((req, res) => {
      res.status(503).send("DB not available")
  })
})