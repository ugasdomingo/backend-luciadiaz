//Import tools
import { Router } from "express";
import { dataAuthValidation } from "../middleware/dataAuthValidation";
import { UserModel } from "../models/User";
import { generateRefreshToken, generateToken } from "../utils/tokenManager";
import jwt from 'jsonwebtoken';


//Define router
const authRouter = Router()


//Routes
authRouter.post('/register', dataAuthValidation, 
  //Register Controller
  async (req: any, res: any) => {
    const { name, email, password } = req.body

    try {
      //Validate unique user
      const uniqueEmail = await UserModel.findOne({email});
      if (uniqueEmail) 
        return res.status(400).json({message: 'Usuario ya Existe'})
      ;    
  
      //Create new user
      const user = new UserModel({ name, email, password })
      await user.save()

      //Email Validation

      //Generate Token & RefreshToken
      generateRefreshToken(user.id, res)
      return res.json(generateToken(user.id))
      
    } catch (error) {
      console.error(error);
      return res.status(500).json({message: "Error en el servidor"})
    }
  }
);

authRouter.post('/login', dataAuthValidation, 
  //Login Controller
  async (req: any, res: any) => {
    const { email, password } = req.body
    try {
      //Validate User
      const user = await UserModel.findOne({email});
      if (!user)
        return res.status(400).json({ message:'Credenciales Inválidas'})
      ;

      //Validate Password
      const validatePassword = await user.comparePassword(password);
      if (!validatePassword)
        return res.status(400).json({ message:'Credenciales Inválidas'})
      ;
      
      //Generate Token & RefreshToken
      generateRefreshToken(user.id, res)
      return res.json(generateToken(user.id))

    } catch (error) {
      console.log(error)
      return res.status(500).json({ message:'Error en el servidor'})
    }
});

authRouter.get('/refresh', async (req: any, res: any) => {
  //Payload for req.uid
  interface JwtPayload {
    uid: string
  }

  try {
    let refreshTokenCookie = req.headers.cookie;
    refreshTokenCookie = refreshTokenCookie.split("=")[1];

    if (!refreshTokenCookie)
      throw new Error('Debes hacer login para ver esta página')
    ;

    const {uid} = jwt.verify(refreshTokenCookie, process.env.JWT_REFRESH as string) as JwtPayload;
    return res.json(generateToken(uid))

  } catch (error: any) {
    return res.status(401).json({message: error.message})
  }

});

authRouter.get('/logout', async (req: any, res: any) => {
  res.clearCookie('refreshToken');
  res.json({mesage: 'Logout'})
});

//Export routes
export default authRouter