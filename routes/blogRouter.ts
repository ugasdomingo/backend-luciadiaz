//Import tools
import { Router } from "express";
import { adminAuth } from "../middleware/adminAuth";
import fs from 'fs-extra';
import fileUpload from 'express-fileupload';
import {
	createPost,
	deletePost,
	getAllPost,
	getPost,
	updatePost,
} from "../controllers/blogControllers";

//Define router
const blogRouter = Router();

//Routes
blogRouter.get("/all", getAllPost);

blogRouter.post("/",fileUpload({
	useTempFiles: true,
	tempFileDir: './uploads',
}), adminAuth, createPost);

blogRouter.get("/:id", getPost);

blogRouter.delete("/:id", adminAuth, deletePost);

blogRouter.put("/:id", adminAuth, updatePost);

//Export routes
export default blogRouter;
