import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import prisma from "../prisma";
import { Response, Request } from "express";
const SECRET_KEY = process.env.SECRET_KEY || "this is satisfying typescript";

async function createAdmin(req: Request, res: Response): Promise<void> {
  const { username, password } = req.body;
  const admin = await prisma.admin.findUnique({
    where: { username },
  });
  if (admin)
    res.status(409).send({ error: "409", message: "User already exists" });
  try {
    if (password === "") throw new Error();
    const hash = await bcrypt.hash(password, 10);
    const newAdmin = await prisma.admin.create({
      data: {
        username,
        password: hash,
      },
    });
    const { id } = newAdmin;
    const accessToken = jwt.sign({ id }, SECRET_KEY);
    res.status(201).send({ accessToken });
  } catch (error) {
    console.log("Error: ", error);
    res.sendStatus(500);
  }
}
async function loginAdmin(req: Request, res: Response): Promise<void> {
  const { username, password } = req.body;
  try {
    const admin = await prisma.admin.findUnique({ where: { username } });
    if (admin) {
      const validatedPass = await bcrypt.compare(password, admin.password);
      if (!validatedPass) throw new Error();
      const accessToken = jwt.sign({ id: admin.id }, SECRET_KEY);
      res.status(200).send({ accessToken });
    }
  } catch (error) {
    res
      .status(401)
      .send({ error: "401", message: "Username or password is incorrect" });
  }
}

export { createAdmin, loginAdmin };
