const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

const customerGroupRouters = require("./routers/customerGroupRouters");
const customerStoreRouters = require("./routers/customerStoreRouters");
const targetRouters = require("./routers/targetRouters");
const productRouters = require("./routers/productRouters");
const brandRouters = require("./routers/brandRouters");
const categoryRouters = require("./routers/categoryRouters");
const purchaseOrderRouters = require("./routers/purchaseOrderRouters");
const productAndStoreRouters = require("./routers/productAndStoreRouters");
const stockRouters = require("./routers/stockRouters");

const app = express();
// api.use(express.static(__dirname + '/public'));
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.use("/api/customergroup", customerGroupRouters);
app.use("/api/customerstore", customerStoreRouters);
app.use("/api/target", targetRouters);
app.use("/api/product", productRouters);
app.use("/api/brand", brandRouters);
app.use("/api/category", categoryRouters);
app.use("/api/purchaseorder", purchaseOrderRouters);
app.use("/api/productandstore", productAndStoreRouters);
app.use("/api/stock", stockRouters);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});

// path

const path = require("path");

let result = path.basename("/public_html/home/index.html");
console.log(result);

// Models Sync

// let db = require("./models/index.js");

// (async () => {
//   try {
//     await db.sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }

//   await db.sequelize.sync({ force: true });
//   console.log("All models were synchronized successfully.");
// })();
