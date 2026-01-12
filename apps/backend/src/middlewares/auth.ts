import jwt from "jsonwebtoken"
import { Request,Response,NextFunction } from "express"
export function verifyAuth(req:Request, res:Response, next:NextFunction) {
  const token = req.cookies?.auth_token
  
  if (!token) 
  {
    console.log("No auth_token cookie found");
    console.log("Cookies received:", req.cookies);
    return res.status(401).json({ error: "Not authorized - Please login first" })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!)
    //@ts-ignore
    req.user = decoded//userId && email Object
    next()
  } catch (err) {
    console.log("Invalid token:", err);
    return res.status(403).json({ error: "Invalid or expired token" })
  }
}