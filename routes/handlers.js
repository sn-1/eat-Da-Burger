
const express = require("express");
const router = express.Router();
const orm = require("../config/orm");

router.get("/", function (req, res) {
   res.json({
       message: "hello"
    });
});


module.exports = router;