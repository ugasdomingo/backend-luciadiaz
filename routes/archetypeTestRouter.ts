//Import tools
import { Router } from "express";
import { userAuth } from "../middleware/userAuth";
import { adminAuth } from "../middleware/adminAuth";
import { userOrAdminAuth } from "../middleware/userOrAdminAuth";
import {
	createArchetypeTest,
	deleteArchetypeTest,
	getAllArchetypeTest,
	getArchetypeTest,
	updateArchetypeTest,
} from "../controllers/archetypeTestControllers";

//Define router
const archetypeTestRouter = Router();

//Routes
archetypeTestRouter.get("/archetype", adminAuth, getAllArchetypeTest);

archetypeTestRouter.post("/archetype", userAuth, createArchetypeTest);

archetypeTestRouter.get("/archetype/:id", userOrAdminAuth, getArchetypeTest);

archetypeTestRouter.delete("/archetype/:id", adminAuth, deleteArchetypeTest);

archetypeTestRouter.put("/archetype/:id", adminAuth, updateArchetypeTest);

//Export routes
export default archetypeTestRouter;
