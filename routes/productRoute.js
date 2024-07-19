const express = require("express");
const {
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  postProduct,
} = require("../contoller/productsController");

const router = express.Router();
router.get("/", getProducts);

router.get("/:id", getProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

router.post("/", postProduct);

module.exports = router;
