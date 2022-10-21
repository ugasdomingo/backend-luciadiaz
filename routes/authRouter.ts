//Import tools
import { Router } from "express";
import { dataAuthValidation } from "../middleware/dataAuthValidation";
import { adminAuth } from "../middleware/adminAuth";
import {
	register,
	login,
	refresh,
	logout,
	oneUser,
	allUsers,
	self,
} from "../controllers/usersControllers";

//Define router
const authRouter = Router();

//Routes
authRouter.post("/register", dataAuthValidation, register);

authRouter.post("/login", dataAuthValidation, login);

authRouter.get("/refresh", refresh);

authRouter.get("/logout", logout);

authRouter.get("/self", self);

authRouter.get("/:id", adminAuth, oneUser);

authRouter.get("/", adminAuth, allUsers);

//Export routes
export default authRouter;
