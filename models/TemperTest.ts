// Import tools
import { Schema, model } from "mongoose";

//Create Regiter Schema
const TemperTestSchema = new Schema({
	date: {
		type: Date,
		default: Date.now(),
	},
	sanguine: {
		type: String,
		required: true,
	},
	choleric: {
		type: String,
		required: true,
	},
	phlegmatic: {
		type: String,
		required: true,
	},
	melancholic: {
		type: String,
		required: true,
	},
	uid: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
});

export default model("TemperTest", TemperTestSchema);
