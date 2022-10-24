//Import tools
import { Router } from "express";
import { userAuth } from "../middleware/userAuth";
import { adminAuth } from "../middleware/adminAuth";
import { userOrAdminAuth } from "../middleware/userOrAdminAuth";
import {
	createTemperTest,
	deleteTemperTest,
	getAllTemperTest,
	getTemperTest,
	updateTemperTest,
} from "../controllers/temperTestControllers";

//Define router
const temperTestRouter = Router();

//Routes
temperTestRouter.get("/temper", adminAuth, getAllTemperTest);

temperTestRouter.post("/temper", userAuth, createTemperTest);

temperTestRouter.get("/temper/:id", userOrAdminAuth , getTemperTest);

temperTestRouter.delete("/temper/:id", adminAuth, deleteTemperTest);

temperTestRouter.put("/temper/:id", adminAuth, updateTemperTest);

//Export routes
export default temperTestRouter;
