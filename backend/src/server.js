const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const database = require("./database.js");
const port = 8000; // can change this port

// test route
app.get("/test", async (res, response) => {
  response.send("<p>The server is actually working. test</p>");
});
app.listen(port, () => console.log("Server is running on port 8000"));

// for reference:
// 1. cd in /src, 2. do "node server.js", 3. go to localhost:8000/test to test the above. Cmd + C to stop server
// SQL (with PreparedStatements): const result = await database.query("SELECT * FROM User WHERE email = ? AND password = ?");
// Psql: const result = await database.query("SELECT * FROM users WHERE email = $1 AND password = $2", [email, password]);
