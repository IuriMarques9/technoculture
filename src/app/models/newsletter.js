import mongoose from 'mongoose';

const newsletterSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true }
});

//O terceiro parametro refere-se à tabela do banco de dados
export default mongoose.models.Newsletter || mongoose.model('Newsletter', newsletterSchema, 'newsletter');