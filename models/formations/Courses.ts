// Import tools
import { Schema, model } from "mongoose";

//Create Enrollment Schema
const coursesSchema = new Schema({
	formationName: {
		type: String,
		required: true,
	},
	formationType: {
		type: String,
		required: true,
	},
    description: {
		type: String,
		required: true,
	},
    initialDate: {
		type: String,
		required: true,
	},
    finalDate: {
		type: String,
		required: true,
	},
    price: {
		type: String,
		required: true,
	},
    location: {
		type: String,
		required: true,
	},
	imageUrl: {
		type: String,
		required: true,
	},
	tags: {
		type: [String],
		required: true,
	},
	complited: {
		type: Number,
		default: 0,
	},
})

export default model("Courses", coursesSchema);

