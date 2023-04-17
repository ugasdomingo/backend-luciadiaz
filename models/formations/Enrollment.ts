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
		ref: "Formationss",
		required: true,
	},
	paymentMethod: {
		type: String,
		required: true,
	},
	paymentProof: {
		public_id: {
			type: String,
			required: true,
		},
		secure_url: {
			type: String,
			required: true,
		},
	},	
    payed: {
		type: Boolean,
		default: true,
	},
    uid: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
})

export default model("Enrollments", enrollmentSchema);
