// Import tools
import { Schema, model } from "mongoose";

//Create BestDad Schema
const bestDadSchema = new Schema({
    date: {
		type: Date,
		default: Date.now(),
	},
    dadsName: {
		type: String,
		required: true,
	},
    childsName: {
		type: String,
		required: true,
	},
    backgroundColor: {
		type: String,
		required: true,
	},
    direction: {
		type: String,
	},
    image: {
		public_id: {
			type: String,
			required: true,
		},
		secure_url: {
			type: String,
			required: true,
		},
	},
    uid: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
})

export default model("BestDadForm", bestDadSchema);