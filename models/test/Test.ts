// Import tools
import { Schema, model } from "mongoose";

//Create Test Schema
const testSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	questions: {
		type: Object,
		required: true,
	},
	analyticsResults: {
		type: Object,
	},
});

export default model("Test", testSchema);
