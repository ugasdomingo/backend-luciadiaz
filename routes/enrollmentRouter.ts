//Import tools
import { Router } from "express";
import { adminAuth } from "../middleware/adminAuth";
import { userAuth } from "../middleware/userAuth";
import { getAllEnrollment, createEnrollment, getEnrollment, deleteEnrollment, updateEnrollment } from "../controllers/enrollmentControllers";

//Define router
const enrollmentRouter = Router();

//Routes
enrollmentRouter.get("/", adminAuth, getAllEnrollment);

enrollmentRouter.post("/", userAuth, createEnrollment);

enrollmentRouter.get("/:id", adminAuth, getEnrollment);

enrollmentRouter.delete("/:id", adminAuth, deleteEnrollment);

enrollmentRouter.put("/:id", adminAuth, updateEnrollment);

//Export routes
export default enrollmentRouter;