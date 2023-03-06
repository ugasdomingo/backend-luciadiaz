//Import tools
import { Router } from "express";
import { adminAuth } from "../middleware/adminAuth";
import { userAuth } from "../middleware/userAuth";
import { getAllAnamneses, getAnamnesesByUserID, createAnamneses } from "../controllers/test/anamnesesControllers";
//Define router
const anamnesesRouter = Router();

//Routes
anamnesesRouter.get("/", adminAuth, getAllAnamneses);

anamnesesRouter.post("/", userAuth, createAnamneses);

anamnesesRouter.get("/:id", adminAuth, getAnamnesesByUserID);

//Export routes
export default anamnesesRouter;