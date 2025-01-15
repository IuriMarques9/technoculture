import mongoose, { Schema } from 'mongoose';

const nextEventsSchema = new Schema(
  {
    title: { type: String},
    url: {type: String},
    date: {type: Date},
    link: {type: String},
  }
);

//O terceiro parametro refere-se à tabela do banco de dados
const NextEvents = mongoose.models.NextEvents || mongoose.model('nextEvents', nextEventsSchema, 'nextEvents');

export default NextEvents;