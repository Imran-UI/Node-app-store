const express = require("express");

const path = require("path");
const rootDir = require("../utils/path");

const router = express.Router();

const prods = [];

router.get("/add-product", (req, res, next) => {
	// res.sendFile(path.join(rootDir, "views", "add-product.html"));
    res.render("add-product", {title: "Add Product", path: "admin/add-product"});
});

router.post("/product", (req, res, next) => {
	prods.push({title: req.body.title});
	res.redirect("/");
});

exports.routes = router;
exports.products = prods;
