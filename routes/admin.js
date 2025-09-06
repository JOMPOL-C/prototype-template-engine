const express = require("express");
const router = express.Router();
const path = require("path");

const products = [];

router.get("/add-product", (req, res) => {
  res.render("add-product", { pageTitle: "Add Product", path: "/admin/add-product" });
});

router.post("/add-product", (req, res) => {
  products.push({ 
    title : req.body.title,
    price : req.body.price,
    description: req.body.description
  });
  res.redirect("/");
});

router.post("/delete-product", (req, res) => {
  const index = req.body.index;
  if (index !== undefined) {
    products.splice(index, 1);
  }
  res.redirect("/");
});

exports.routes = router;
exports.products = products;