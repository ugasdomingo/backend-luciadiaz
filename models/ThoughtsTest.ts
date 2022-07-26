// Import tools
import { Schema, model } from "mongoose";

//Create Regiter Schema
const ThoughtsTestSchema = new Schema({
	date: {
		type: Date,
		default: Date.now(),
	},
	results: {
		type: [String],
		required: true,
	},
	uid: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
});

export default model("ThoughtsTest", ThoughtsTestSchema);
