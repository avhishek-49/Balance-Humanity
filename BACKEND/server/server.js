const express = require("express");
const app = express();
const dotenv = require('dotenv');
dotenv.config({path:"./.env"});
let { mysqlHelper }= require("./helpers/index");
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Welcome message
app.get("/", (req, res) => {
    res.json({ message: "Hello, Balance Humanity" });
});

const mainRoutes = require("./routes/route_paths.js");
app.use('/api/balance-humanity/v1', mainRoutes);

let PORT = process.env.PORT || 4900;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    mysqlHelper.init();
});
