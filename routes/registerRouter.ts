//Import tools
import { Router } from "express";
import { userAuth } from "../middleware/userAuth";
import { adminAuth } from "../middleware/adminAuth";
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

registerRouter.post("/register", userAuth, createRegister);

registerRouter.get("/register/:id", adminAuth, getRegister);

registerRouter.delete("/register/:id", adminAuth, deleteRegister);

registerRouter.put("/register/:id", adminAuth, updateRegister);

//Export routes
export default registerRouter;
