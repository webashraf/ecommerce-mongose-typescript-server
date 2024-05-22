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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderController = void 0;
const order_service_1 = require("./order.service");
const order_validation_1 = __importDefault(require("./order.validation"));
// Create a new order and manage inventory
const createNewOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderData = req.body;
        const zodOrderValidation = order_validation_1.default.parse(orderData);
        const result = yield order_service_1.orderService.createNewOrderIntoDB(zodOrderValidation);
        res.status(200).json({
            success: true,
            message: "Order created successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Insufficient quantity available in inventory",
            // data: error,
        });
    }
});
// Retrieve all orders
const retriveOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.query;
        const allOrders = yield order_service_1.orderService.retriveAllOrdersFromDB(email);
        res.status(200).json({
            success: true,
            message: "Order fetched successfully!",
            data: allOrders,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Order not found",
            data: error,
        });
    }
});
exports.orderController = {
    createNewOrder,
    retriveAndSearchOrders: retriveOrders,
};
