import express from "express";
import { productsController } from "./product.controller";

const router = express.Router();

// Create new product
router.post("/", productsController.createNewProduct);

// Retrive and search all products
router.get("/", productsController.retriveAndSearchProducts);

// Retrive a single product
router.get("/:productId", productsController.retriveSingleProduct);

// Update a single product
router.put("/:productId", productsController.updateSingelProduct);

// Delete a single product
router.delete("/:productId", productsController.deleteProduct);

export const productsRoute = router;
