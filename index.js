const express = require("express");
require("dotenv").config()
const app = express();
const PORT = process.env.port || 8080;
const { dbConnection } = require("./config/config")

app.use(express.json())

app.use("/posts",require("./routes/posts"))
app.use("/comments",require("./routes/comments"))
app.use("/users",require("./routes/users"))

dbConnection()

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));