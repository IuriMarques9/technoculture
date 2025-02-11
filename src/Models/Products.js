import mongoose, { Schema } from 'mongoose';

const productsSchema = new Schema(
  {
    _id: { type: String },
    title: {type: String},
    price: { type: Number},
    description: {type: String},
    sales: {type: Number},
    url: {type: String},
    colors:{type: Object},
  }
);

//O terceiro parametro refere-se à tabela do banco de dados
const Products = mongoose.models.Products || mongoose.model('Products', productsSchema, 'products');

export default Products;