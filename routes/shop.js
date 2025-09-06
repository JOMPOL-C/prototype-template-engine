const path = require("path");

const express = require("express");
const router = express.Router();

const adminData = require("./admin");

router.get("/", (req, res, next) => {
  const products = adminData.products;
  console.log(products);
  res.render("shop", {
    prods: products.map((p, i) => ({ ...p, index: i })),
    pageTitle: "My Shop Mak Mak",
    path: "/",
  });
});

module.exports = router;