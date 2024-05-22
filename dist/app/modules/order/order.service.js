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
exports.orderService = void 0;
const mongoose_1 = require("mongoose");
const product_model_1 = require("../Product/product.model");
const product_service_1 = require("../Product/product.service");
const order_model_1 = require("./order.model");
// Create a new order and manage the inventory
const createNewOrderIntoDB = (order) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderedProducts = yield product_service_1.productService.retriveSingleProductFromDB(order.productId);
        const productsInventory = orderedProducts === null || orderedProducts === void 0 ? void 0 : orderedProducts.inventory.quantity;
        const reduceInventory = productsInventory - order.quantity;
        if (productsInventory > 0 && productsInventory >= order.quantity) {
            if (productsInventory <= 1 || productsInventory >= order.quantity) {
                yield product_model_1.ProductModel.findOneAndUpdate({ _id: order.productId }, { "inventory.inStock": false });
            }
            yield product_model_1.ProductModel.findOneAndUpdate({ _id: order.productId }, { "inventory.quantity": reduceInventory });
            const newOrder = yield order_model_1.OrderModel.create(order);
            return newOrder;
        }
        else {
            return Promise.reject(new mongoose_1.Error("Condition not met"));
        }
    }
    catch (err) {
        console.log(err);
    }
});
// Retrieve all orders and search by email from DB
const retriveAllOrdersFromDB = (emailQuery) => __awaiter(void 0, void 0, void 0, function* () {
    if (emailQuery) {
        return yield order_model_1.OrderModel.find({ email: { $regex: emailQuery, $options: "i" } });
    }
    return yield order_model_1.OrderModel.find();
});
exports.orderService = {
    createNewOrderIntoDB,
    retriveAllOrdersFromDB
};
