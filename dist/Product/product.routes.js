"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRoute = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
// Create new product by http://localhost:5000/api/products this route
router.post("/", product_controller_1.productsController.createNewProduct);
// Retrive all products by http://localhost:5000/api/products this route
router.get("/", product_controller_1.productsController.retriveAllProducts);
// Retrive single product by http://localhost:5000/api/products/:productId this route
router.get("/:productId", product_controller_1.productsController.retriveSingleProduct);
// Update a single product by http://localhost:5000/api/products/:productId this route
router.put("/:productId", product_controller_1.productsController.updateSingelProduct);
exports.productsRoute = router;
