//Import tools
import { Schema, model } from 'mongoose';

//Create Post Schema
const postSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        category: {
            type: String,
            required: true,
            trim: true,
        },
        img: {
            public_id: {
                type: String,
            },
            secure_url: {
                type: String,
            },
        },
        body: {
            type: String,
            required: true,
        },
        urlVideo: {
            type: String,
        },
        author: {
            type: String,
            default: 'Lucia Diaz',
        },
    },
    {
        timestamps: true,
    }
);

export default model('Post', postSchema);
