//Import tools
import { Router } from "express";
//import { adminAuth } from "../middleware/adminAuth";
import { userAuth } from "../middleware/userAuth";
import fs from "fs-extra";
import fileUpload from "express-fileupload";
import { createBestDad } from "../controllers/materials/bestDadControllers"


//Define router
const bestDadRouter = Router();

//Routes
bestDadRouter.post('/', fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
}), userAuth, createBestDad )

//Export routes
export default bestDadRouter;