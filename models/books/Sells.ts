// Import tools
import { Schema, model } from "mongoose";

//Create Sells Schema
const sellsSchema = new Schema({
    date: {
		type: Date,
		default: Date.now(),
	},
    bid: {
		type: Schema.Types.ObjectId,
		ref: "Books",
		required: true,
	},
	numberProof: {
		type: String,
		required: true,
	},
    status: {
        type: String,
        required: true,
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

export default model("Sellss", sellsSchema);