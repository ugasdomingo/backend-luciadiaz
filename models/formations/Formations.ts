// Import tools
import { Schema, model } from "mongoose";

//Create Enrollment Schema
const formationsSchema = new Schema({
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
    duration: {
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
	coverImage: {
		public_id: {
			type: String,
			required: true,
		},
		secure_url: {
			type: String,
			required: true,
		},
	},
	tags: {
		type: String,
		required: true,
	},
	paypalButton: {
		type: String,
		required: true,
	},
	videoUrl: {
		type: String,
		required: true,
	},
})

export default model("Formations", formationsSchema);

