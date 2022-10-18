//Import tools
import { Router } from "express";
import { adminAuth } from "../middleware/adminAuth";
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
blogRouter.get("/", getAllPost);

blogRouter.post("/", adminAuth, createPost);

blogRouter.get("/:id", getPost);

blogRouter.delete("/:id", adminAuth, deletePost);

blogRouter.put("/:id", adminAuth, updatePost);

//Export routes
export default blogRouter;
