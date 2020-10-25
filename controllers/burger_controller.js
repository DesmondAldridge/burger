//Dependencies / Imports
const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

//Routes
router.get("/", function(req, res) {
    burger.selectAll(function (data) {
     var hbsObject = {
            burgers: data
     };

     res.render("index", hbsObject);

    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne([
     "burger_name", "devoured"
    ], [
     req.body.name, req.body.devoured
    ], function(result) {
     res.json({ id: result.insertID });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id=" + req.params.id;

    burger.updateOne({
        devoured: true
    }, condition, function(result) {
        if (result.changedRows == 0) {
         return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

//Exports
module.exports = burger_controller;