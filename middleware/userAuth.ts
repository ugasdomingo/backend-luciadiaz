//Import tools
import jwt from 'jsonwebtoken';

interface JwtPayload {
  uid: string
}

//Authenticated user
export const userAuth = (req: any,res: any,next: any) =>{
  try {
    let token = req.headers.authorization;
    if (!token)
     throw new Error('Debes hacer login para ver esta página')
    ;

    token = token.split(" ")[1]
    const {uid} = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
    req.uid = uid

    next()
  } catch (error: any) {
    return res.status(401).json({message: error.message})
  }
}