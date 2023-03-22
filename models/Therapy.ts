//Import tools
import { Schema, model } from "mongoose";

//Create Therapy Schema
const therapySchema = new Schema(
	{
        date: {
            type: Date,
            default: Date.now(),
        },
		motivo: {
			type: String,
			required: true,
			trim: true,
		},
		observations: {
			type: String,
			required: true,
			trim: true,
		},
		todos: {
			type: [String],
            required: true,
		},
	},
	{
		versionKey: false,
	}
);

export default model("Therapy", therapySchema);