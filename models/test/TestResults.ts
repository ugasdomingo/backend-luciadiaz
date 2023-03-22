// Import tools
import { Schema, model } from "mongoose";

//Create Regiter Schema
const testResultsSchema = new Schema({
    date: {
		type: Date,
		default: Date.now(),
	},
    tid: {
		type: Schema.Types.ObjectId,
		ref: "Test",
		required: true,
	},
    respuestas: {
        type: Object,
        required: true,
    },
    uid: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
})

export default model("TestResults", testResultsSchema);