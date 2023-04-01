//Import tools
import { Router } from "express";
import { userOrAdminAuth } from "../../middleware/userOrAdminAuth";
import { userAuth } from "../../middleware/userAuth";
import { getAllTestResults, getTestResultsByUserID, createTestResults, deleteTestsResults } from "../../controllers/test/testResultsControllers";

//Define router
const testResultsRouter = Router();

//Routes
testResultsRouter.get("/all", userOrAdminAuth, getAllTestResults);

testResultsRouter.post("/", userAuth, createTestResults);

testResultsRouter.get("/:id", userOrAdminAuth, getTestResultsByUserID);

testResultsRouter.delete("/:id", userAuth, deleteTestsResults);

//Export routes
export default testResultsRouter;