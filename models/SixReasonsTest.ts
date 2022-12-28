// Import tools
import { Schema, model } from "mongoose";

//Create Six Reasons Schema
const SixReasonsTestSchema = new Schema({
    date: {
		type: Date,
		default: Date.now(),
	},
	objetive: {
		type: String,
		required: true,
	},
	username: {
		type: String,
		required: true,
	},
    reasons: {
		type: [String],
		required: true,
	},
	uid: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
});

export default model("SixReasonsTest", SixReasonsTestSchema);