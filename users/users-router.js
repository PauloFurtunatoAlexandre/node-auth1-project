const router = require("express").Router();
const restrictedMiddleware = require("../auth/restricted-middleware.js");

const Users = require("./users-model.js");

router.get("/", restrictedMiddleware, (req, res) => {
    console.log(req.session);
    Users.find().then((users) => {
        res.status(200).json(users);
    });
});

module.exports = router;
