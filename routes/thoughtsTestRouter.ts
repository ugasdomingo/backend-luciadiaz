//Import tools
import { Router } from "express";
import { adminAuth } from "../middleware/adminAuth";
import { patientOrAdminAuth } from "../middleware/patientOrAdminAuth";
import {
	getAllThoughtsTest,
	createThoughtsTest,
	getThoughtsTest,
	deleteThoughtsTest,
	updateThoughtsTest,
} from "../controllers/thoughtsTestControllers";

//Define router
const thoughtsTestRouter = Router();

//Routes
thoughtsTestRouter.get("/thoughts", adminAuth, getAllThoughtsTest);

thoughtsTestRouter.post("/thoughts", patientOrAdminAuth, createThoughtsTest);

thoughtsTestRouter.get("/thoughts/:id", adminAuth, getThoughtsTest);

thoughtsTestRouter.delete("/thoughts/:id", adminAuth, deleteThoughtsTest);

thoughtsTestRouter.put("/thoughts/:id", adminAuth, updateThoughtsTest);

//Export routes
export default thoughtsTestRouter;
