const express = require("express");
const dotenv = require("dotenv").config();
const path = require("path");
const cors = require("cors");

const port = process.env.PORT || 8000;

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "frontend")));

app.use("/openai", require("./routes/openaiRoutes"));

app.listen(port, () => console.log(`Server is running at port ${port}`));

// end
