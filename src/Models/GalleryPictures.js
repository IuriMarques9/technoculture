import mongoose, { Schema } from 'mongoose';

const galleryPicturesSchema = new Schema(
  {
    partyDate: { type: Date},
    url: {type: String},
  }
);

//O terceiro parametro refere-se à tabela do banco de dados
const GalleryPictures = mongoose.models.GalleryPictures || mongoose.model('GalleryPictures', galleryPicturesSchema, 'galleryPictures');

export default GalleryPictures;