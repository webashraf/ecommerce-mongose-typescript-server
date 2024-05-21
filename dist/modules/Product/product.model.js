"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
// variants schema
const variantsSchema = new mongoose_1.Schema({
    type: {
        type: String,
        enum: ["color"],
        required: true,
    },
    value: {
        type: String,
        required: true,
    },
});
// Inventory schema
const inventorySchema = new mongoose_1.Schema({
    quantity: {
        type: Number,
        required: true,
    },
    inStock: {
        type: Boolean,
        required: true,
    },
});
// Product schema
const productShcema = new mongoose_1.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        required: true,
    },
    variants: {
        type: [variantsSchema],
        required: true,
    },
    inventory: {
        type: inventorySchema,
        required: true,
    },
});
// Model
exports.ProductModel = (0, mongoose_1.model)("Product", productShcema);
