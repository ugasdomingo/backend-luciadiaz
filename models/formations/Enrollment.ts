// Import tools
import { Schema, model } from "mongoose";

//Create Enrollment Schema
const enrollmentSchema = new Schema({
    date: {
		type: Date,
		default: Date.now(),
	},
    fid: {
		type: Schema.Types.ObjectId,
		ref: "Courses",
		required: true,
	},
	numberProof: {
		type: String,
		required: true,
	},
    payed: {
		type: Boolean,
		required: true,
		default: false,
	},
    paymentMethod: {
		type: String,
		required: true,
	},
    uid: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
})

export default model("Enrollments", enrollmentSchema);
