import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
const SECRET_KEY = process.env.SECRET_KEY || "this is satisfying typescript";
import prisma from "../prisma";

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // extract token from auth headers
  const authHeaders = req.headers["authorization"];
  if (!authHeaders) return res.sendStatus(403);
  const token = authHeaders.split(" ")[1];

  try {
    // // verify & decode token payload,
    // const { id } = jwt.verify(token, SECRET_KEY);
    // // attempt to find user object and set to req
    // const admin = await prisma.admin.findUnique({ where: { id } });
    // if (!admin) return res.sendStatus(401);
    // req.admin = admin;
    next();
  } catch (error) {
    res.sendStatus(401);
  }
};

export default authMiddleware;
