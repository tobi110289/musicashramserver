import prisma from "../prisma";
import { Response, Request } from "express";

async function getAll(req: Request, res: Response): Promise<void> {
  try {
    const users = await prisma.user.findMany();
    res.status(200);
    res.send(users);
  } catch (error) {
    console.log("Error: ", error);
    res.sendStatus(500);
  }
}

async function getUserById(req: Request, res: Response): Promise<void> {
  try {
    const user = await prisma.user.findUnique({
      where: { id: +req.params.id },
    });
    res.status(200);
    res.send(user);
  } catch (error) {
    console.log("Error: ", error);
    res.sendStatus(500);
  }
}

async function updateUserById(req: Request, res: Response): Promise<void> {
  try {
    const user = await prisma.user.update({
      where: { id: +req.params.id },
      data: req.body,
    });
    const updatedUser = await prisma.user.findUnique({
      where: { id: +req.params.id },
    });
    res.status(200);
    res.send(updatedUser);
  } catch (error) {
    console.log("Error: ", error);
    res.sendStatus(500);
  }
}

async function updateTokenByUserId(req: Request, res: Response): Promise<void> {
  try {
    const user = await prisma.user.update({
      where: { id: +req.params.id },
      data: {
        tokens: {
          increment: req.body.amount,
        },
      },
    });
    const updatedUser = await prisma.user.findUnique({
      where: { id: +req.params.id },
    });
    res.status(200);
    res.send(updatedUser);
  } catch (error) {
    console.log("Error: ", error);
    res.sendStatus(500);
  }
}

async function deleteUserById(req: Request, res: Response): Promise<void> {
  try {
    await prisma.user.delete({
      where: { id: +req.params.id },
    });
    res.sendStatus(204);
  } catch (error) {
    console.log("Error: ", error);
    res.sendStatus(500);
  }
}

async function create(req: Request, res: Response) {
  try {
    const newUser = await prisma.user.create({
      data: {
        ...req.body,
        tokens: 0,
      },
    });
    res.status(201);
    res.send(newUser);
  } catch (error) {
    console.log("Error: ", error);
    res.sendStatus(500);
  }
}

async function deleteAll(req: Request, res: Response) {
  try {
    const deleteUsers = await prisma.user.deleteMany({});
    res.status(201);
    res.send(deleteUsers);
  } catch (error) {
    console.log("Error: ", error);
    res.sendStatus(500);
  }
}

async function deleteAllTokens(req: Request, res: Response) {
  try {
    await prisma.user.updateMany({
      data: {
        tokens: 0,
      },
    });
    const updatedUsers = await prisma.user.findMany();
    res.status(200);
    res.send(updatedUsers);
  } catch (error) {
    console.log("Error: ", error);
    res.sendStatus(500);
  }
}

export {
  getAll,
  create,
  getUserById,
  deleteUserById,
  updateUserById,
  updateTokenByUserId,
  deleteAll,
  deleteAllTokens,
};
