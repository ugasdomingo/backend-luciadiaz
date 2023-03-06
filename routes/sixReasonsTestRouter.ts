//Import tools
import { Router } from "express";
import { userAuth } from "../middleware/userAuth";
import { userOrAdminAuth } from "../middleware/userOrAdminAuth";
import { adminAuth } from "../middleware/adminAuth";
import {
	getAllSixReasonsTest,
	createSixReasonsTest,
	getSixReasonsTest,
	deleteSixReasonsTest,
	updateSixReasonsTest,
} from "../controllers/test/sixReasonsTestControllers";

//Define router
const sixReasonsTestRouter = Router();

//Routes
sixReasonsTestRouter.get("/sixReasons", adminAuth, getAllSixReasonsTest);

sixReasonsTestRouter.post("/sixReasons", userAuth, createSixReasonsTest);

sixReasonsTestRouter.get("/sixReasons/:id", userOrAdminAuth, getSixReasonsTest);

sixReasonsTestRouter.delete("/sixReasons/:id", adminAuth, deleteSixReasonsTest);

sixReasonsTestRouter.put("/sixReasons/:id", adminAuth, updateSixReasonsTest);

//Export routes
export default sixReasonsTestRouter;