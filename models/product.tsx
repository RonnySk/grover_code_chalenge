import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
  referenceId: { type: String },
  createdAt: { type: String },
  updatedAt: { type: String },
  activatedAt: { type: String },
  activeUntil: { type: String },
  terminatedAt: { type: String },
  terminationReason: { type: String },
  terminationComment: { type: String },
  rentalPeriod: { type: Number },
  monthlyPrice: { type: Number },
  state: { type: String },
  productId: { type: String },
  product: {
    id: { type: String },
    slug: { type: String },
    title: { type: String },
    coreAttribute: { type: String },
    image: { type: String },
    rentalPlans: [
      {
        id: { type: String },
        period: { type: Number },
        price: { type: Number },
        productId: { type: String },
      },
      {
        id: { type: String },
        period: { type: Number },
        price: { type: Number },
        productId: { type: String },
      },
      {
        id: { type: String },
        period: { type: Number },
        price: { type: Number },
        productId: { type: String },
      },
      {
        id: { type: String },
        period: { type: Number },
        price: { type: Number },
        productId: { type: String },
      },
    ],
  },
});

const Product =
  models.grover_products || model("grover_products", ProductSchema);

export default Product;
