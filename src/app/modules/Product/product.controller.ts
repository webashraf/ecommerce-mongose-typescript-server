import { Request, Response } from "express";
import { TProduct } from "./product.interface";
import { productService } from "./product.service";
import ProductValidationSchema from "./product.validation";

// Create a new product
const createNewProduct = async (req: Request, res: Response) => {
  try {
    const newProduct: TProduct = req.body;

    const zodValidationParse = ProductValidationSchema.parse(newProduct);

    const result =
      await productService.createNewProductIntoDB(zodValidationParse);

    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: "Something went wrong",
      data: error,
    });
  }
};

// Retrive all products
const retriveAllProducts = async (req: Request, res: Response) => {
  try {
    const searchQuery = req.query.searchTerm;
    const retrivedProducts =
      await productService.retriveAllProductsFromDB(searchQuery);
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: retrivedProducts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      data: error,
    });
  }
};

// Retirve a single product
const retriveSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const singleProudct =
      await productService.retriveSingleProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: singleProudct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      data: error,
    });
  }
};

// Update a single product
const updateSingelProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updatedInfo = req.body;

    const zodValidationForUpdate = ProductValidationSchema.parse(updatedInfo);
    const updateProduct = await productService.updateSingleProductIntoDB(
      productId,
      zodValidationForUpdate
    );
    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: updateProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!!",
      data: error,
    });
  }
};

// Delete a single product
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    await productService.deleteSingleProductIntoDB(productId);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!!",
      data: error,
    });
  }
};

export const productsController = {
  createNewProduct,
  retriveAndSearchProducts: retriveAllProducts,
  retriveSingleProduct,
  updateSingelProduct,
  deleteProduct,
};
