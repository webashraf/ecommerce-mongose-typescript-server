"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const order_routes_1 = require("./app/modules/order/order.routes");
const product_routes_1 = require("./app/modules/Product/product.routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// For product
app.use("/api/products", product_routes_1.productsRoute);
// For order
app.use("/api/orders", order_routes_1.orderRoute);
app.get("/", (req, res) => {
    res.send("Hello! roducts");
});
exports.default = app;
