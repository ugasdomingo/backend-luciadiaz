//import tools
import { Router } from 'express';
import { adminAuth } from '../middleware/adminAuth';
import { userAuth } from '../middleware/userAuth';
import {
    getInitialUserData,
    getInitialAdminData,
} from '../controllers/generalControllers';

//Define router
const generalRouter = Router();

//Routes
generalRouter.get('/user', userAuth, getInitialUserData);

generalRouter.get('/admin/:uid', adminAuth, getInitialAdminData);

//Export routes
export default generalRouter;
