"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRoute = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
// Create new product
router.post("/", product_controller_1.productsController.createNewProduct);
// Retrive and search all products
router.get("/", product_controller_1.productsController.retriveAndSearchProducts);
// Retrive a single product
router.get("/:productId", product_controller_1.productsController.retriveSingleProduct);
// Update a single product
router.put("/:productId", product_controller_1.productsController.updateSingelProduct);
// Delete a single product
router.delete("/:productId", product_controller_1.productsController.deleteProduct);
exports.productsRoute = router;
