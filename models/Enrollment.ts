// Import tools
import { Schema, model } from "mongoose";
import { Script } from "vm";

//Create Enrollment Schema
const EnrollmentSchema = new Schema({
    date: {
		type: Date,
		default: Date.now(),
	},
    formationID: {
		type: String,
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

export default model("Enrollments", EnrollmentSchema);
