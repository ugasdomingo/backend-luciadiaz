// Import tools
import { Schema, model } from "mongoose";

//Create Regiter Schema
const AnamnesesSchema = new Schema({
    date: {
		type: Date,
		default: Date.now(),
	},
    respuestas: {
        type: Object,
        required: true,
    },
    uid: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
})

export default model("Anamneses", AnamnesesSchema);