import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
const SECRET_KEY = process.env.SECRET_KEY || "this is satisfying typescript";
import prisma from "../prisma";

interface jwtPayload {
  id: string;
  iat: number;
}

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeaders = req.headers["authorization"];
  if (!authHeaders) return res.sendStatus(403);
  const token = authHeaders.split(" ")[1];

  try {
    const { id } = <jwtPayload>jwt.verify(token, SECRET_KEY);
    const admin = await prisma.admin.findUnique({ where: { id } });
    if (!admin) return res.sendStatus(401);
    req.admin = admin.username;
    next();
  } catch (error) {
    res
      .status(401)
      .send({ error: "401", message: "admin needs to be logged in" });
  }
};

export default authMiddleware;
