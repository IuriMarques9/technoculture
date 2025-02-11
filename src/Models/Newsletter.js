import mongoose, { Schema } from 'mongoose';

const newsletterSchema = new Schema(
  {
    email: { type: String},
  }
);

//O terceiro parametro refere-se à tabela do banco de dados
const Newsletter = mongoose.models.Newsletter || mongoose.model('Newsletter', newsletterSchema, 'newsletter');

export default Newsletter;