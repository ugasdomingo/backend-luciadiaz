// Import tools
import { Schema, model } from "mongoose";

//Create Enrollment Schema
const CoursesSchema = new Schema({
    date: {
		type: String,
		required: true,
	},
    formationName: {
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
})

export default model("Courses", CoursesSchema);

