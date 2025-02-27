import mongoose, { Schema } from 'mongoose';

const eventsSchema = new Schema(
  {
    _id: { type: String },
    title: { type: String},
    url: {type: String},
    date: {type: Date},
    link: {type: String},
  }
);

//O terceiro parametro refere-se à tabela do banco de dados
const Events = mongoose.models.NextEvents || mongoose.model('NextEvents', eventsSchema, 'events');

export default Events;