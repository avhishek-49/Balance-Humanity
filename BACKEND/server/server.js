const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({path: "./.env"});
let {mysqlHelper} = require("./helpers/index");
let minioHelper = require("./helpers/minio_helper.js");
app.use(express.json());

app.use(express.urlencoded({extended: true}));

// Welcome message
app.get("/", (req, res) => {
    res.json({message: "Hello, Balance Humanity"});
});

const mainRoutes = require("./routes/index.js");
const {redisInit} = require("./helpers/redis_helper_new.js");
//change end points name..... //todo
app.use("/api/v1", mainRoutes);

let PORT = process.env.PORT || 4900;
app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    await mysqlHelper.init();
    await minioHelper.init();
    await redisInit();
});
