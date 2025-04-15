import { TProduct } from "@types";
import mongoose, { Document } from "mongoose";

const productModal = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      minlength: [3, "Title must be at least 3 characters long"],
      maxlength: [100, "Title cannot exceed 100 characters"],
    },
    description: {
      type: String,
      required: true,
      minlength: [10, "Description must be at least 10 characters long"],
    },
    basePrice: {
      type: Number,
      required: true,
      min: [0, "Base price cannot be negative"],
    },
    salePrice: {
      type: Number,
      required: true,
      validate: {
        validator: function (value: number): boolean {
          return value <= (this as any).basePrice;
        },
        message: "Sale price cannot be higher than base price",
      },
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
      required: true,
    },
    mainImage: {
      type: String,
      required: true,
    },
    gallery: [
      {
        type: String,
        default: "",
      },
    ],
    stock: {
      type: Number,
      required: true,
      min: [0, "Stock cannot be negative"],
      max: [255, "Stock cannot exceed 255"],
    },
    sku: {
      type: String,
      required: true,
    },
    tags: [
      {
        type: String,
      },
    ],
    sizes: [
      {
        size: {
          type: String,
          required: true,
        },
        stock: {
          type: Number,
          required: true,
          min: [0, "Size stock cannot be negative"],
        },
        price: {
          type: Number,
          required: true,
          min: [0, "Size price cannot be negative"],
        },
        image: {
          type: String,
          required: true,
        },
      },
    ],
    published: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<TProduct & Document>("Product", productModal);
