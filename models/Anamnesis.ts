// Import tools
import { Schema, model } from "mongoose";

//Create Regiter Schema
const AnamnesisSchema = new Schema({
    date: {
		type: Date,
		default: Date.now(),
	},
    response: {
        type: Object,
        required: true,
    },
    uid: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
})

export default model("Anamnesis", AnamnesisSchema);