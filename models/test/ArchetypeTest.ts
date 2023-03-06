// Import tools
import { Schema, model } from "mongoose";

//Create Regiter Schema
const ArchetypeTestSchema = new Schema({
	date: {
		type: Date,
		default: Date.now(),
	},
	wise: {
		type: String,
		required: true,
	},
	warrior: {
		type: String,
		required: true,
	},
	wizard: {
		type: String,
		required: true,
	},
	lover: {
		type: String,
		required: true,
	},
	uid: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
});

export default model("ArchetypeTest", ArchetypeTestSchema);
