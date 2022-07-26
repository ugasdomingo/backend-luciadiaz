// Import tools
import { Schema, model } from "mongoose";

//Create Regiter Schema
const registerSchema = new Schema({
  date: {
    type: Date,
    default: Date.now()
  },
  pensamiento: {
    type: String,
    required: true
  },
  emocion: {
    type: String,
    required: true
  },
  accion: {
    type: String,
    required: true
  },
  detonante: {
    type: String,
    required: true
  },
  uid: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
  },
})


export default model('Register', registerSchema);