//Import tools
import { Router } from 'express';

//Define router
const testRouter = Router();

//Routes
testRouter.get('/', (req: any, res: any) => {
    return res.send('Bienvenidos a Lucia API REST');
});

//Export routes
export default testRouter;
