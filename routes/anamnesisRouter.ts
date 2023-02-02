//Import tools
import { Router } from "express";
import { adminAuth } from "../middleware/adminAuth";
import { userAuth } from "../middleware/userAuth";
import { getAllAnamnesis, getAnamnesisByUserID, createAnamnesis } from "../controllers/anamnesisControllers";
//Define router
const anamnesisRouter = Router();

//Routes
anamnesisRouter.get("/", adminAuth, getAllAnamnesis);

anamnesisRouter.post("/", userAuth, createAnamnesis);

anamnesisRouter.get("/:id", adminAuth, getAnamnesisByUserID);

//Export routes
export default anamnesisRouter;