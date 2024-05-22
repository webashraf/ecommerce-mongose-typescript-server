"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
// variants schema
const variantsSchema = new mongoose_1.Schema({
    type: {
        type: String,
        required: true,
        trim: true,
    },
    value: {
        type: String,
        required: true,
        trim: true,
    },
});
// Inventory schema
const inventorySchema = new mongoose_1.Schema({
    quantity: {
        type: Number,
        required: true,
        trim: true,
    },
    inStock: {
        type: Boolean,
        required: true,
        trim: true,
    },
});
// Product schema
const productShcema = new mongoose_1.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
    tags: {
        type: [String],
        required: true,
        trim: true,
    },
    variants: {
        type: [variantsSchema],
        required: true,
        trim: true,
    },
    inventory: {
        type: inventorySchema,
        required: true,
        trim: true,
    },
});
// Model
exports.ProductModel = (0, mongoose_1.model)("Product", productShcema);
