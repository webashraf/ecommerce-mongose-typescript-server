"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productService = void 0;
const mongoose_1 = require("mongoose");
const product_model_1 = require("./product.model");
// Create a new Product
const createNewProductIntoDB = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.ProductModel.create(product);
    return result;
});
// Retrive all products
const retriveAllProductsFromDB = () => __awaiter(void 0, void 0, void 0, function* () { return yield product_model_1.ProductModel.find(); });
// Retrive single product
const retriveSingleProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () { return yield product_model_1.ProductModel.findById(new mongoose_1.Types.ObjectId(id)); });
// Update a single product
const updateSingleProductIntoDB = (id_1, ...args_1) => __awaiter(void 0, [id_1, ...args_1], void 0, function* (id, updatedInfo = null) {
    const updatedProduct = yield product_model_1.ProductModel.updateOne({ _id: id }, { $set: { name: 'Ali kali bali' } });
    return updatedProduct;
});
exports.productService = {
    createNewProductIntoDB,
    retriveAllProductsFromDB,
    retriveSingleProductFromDB,
    updateSingleProductIntoDB
};
