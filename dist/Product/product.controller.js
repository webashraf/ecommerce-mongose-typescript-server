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
exports.productsController = void 0;
const product_service_1 = require("./product.service");
const product_validation_1 = __importDefault(require("./product.validation"));
const createNewProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newProduct = req.body;
        console.log(newProduct);
        const zodValidationParse = product_validation_1.default.parse(newProduct);
        const result = yield product_service_1.productService.createNewProductIntoDB(zodValidationParse);
        res.status(200).json({
            success: true,
            message: "Product created successfully!!",
            data: result,
        });
    }
    catch (error) {
        res.status(200).json({
            success: false,
            message: "Something went wrong",
            data: error,
        });
    }
});
exports.productsController = {
    createNewProduct,
};
