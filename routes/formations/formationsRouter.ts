//Import tools
import { Router } from "express";
import { adminAuth } from "../../middleware/adminAuth";
import { getAllFormations, getFormations, createFormations, deleteFormations, updateFormations } from "../../controllers/formations/formationsControllers";

//Define router
const coursesRouter = Router();

//Routes
coursesRouter.get("/", getAllFormations);

coursesRouter.post("/", adminAuth, createFormations);

coursesRouter.get("/:id", getFormations);

coursesRouter.delete("/:id", adminAuth, deleteFormations);

coursesRouter.put("/:id", adminAuth, updateFormations);

//Export routes
export default coursesRouter;