const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const errorHandler = require("./errorHandler.js");
const session = require("express-session");

const usersRouter = require("../users/users-router.js");
const authRouter = require("../auth/auth-router.js");

const server = express();

const sessionConfig = {
    name: "pacookie",
    secret: "I can't tell you because it's secret",
    cookie: {
        maxAge: 60 * 60 * 1000,
        secure: false,
        httpOnly: true,
    },
    resave: false,
    saveUninitialized: false,
};

server.use(session(sessionConfig));
server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/users", usersRouter);
server.use("/api/auth", authRouter);

server.get("/", (req, res) => {
    res.json({ api: "up" });
});

server.use(errorHandler);

module.exports = server;
