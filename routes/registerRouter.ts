//Import tools
import { Router } from "express";
import { adminAuth } from "../middleware/adminAuth";
import { patientOrAdminAuth } from "../middleware/patientOrAdminAuth";
import {
	createRegister,
	deleteRegister,
	getAllRegisters,
	getRegister,
	updateRegister,
} from "../controllers/registerControllers";

//Define router
const registerRouter = Router();

//Routes
registerRouter.get("/register", adminAuth, getAllRegisters);

registerRouter.post("/register", patientOrAdminAuth, createRegister);

registerRouter.get("/register/:id", adminAuth, getRegister);

registerRouter.delete("/register/:id", adminAuth, deleteRegister);

registerRouter.put("/register/:id", adminAuth, updateRegister);

//Export routes
export default registerRouter;
