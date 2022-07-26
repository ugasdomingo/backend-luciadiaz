//Import tools
import { Schema, model } from "mongoose";


//Create Post Schema
const postSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  img: {
    type: String,
  },
  body: {
    type: String,
    required: true
  }
}, {
  versionKey: false
});


export default model('Post', postSchema)