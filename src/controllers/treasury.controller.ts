import prisma from "../prisma";
import { Response, Request } from "express";

async function getTreasuries(req: Request, res: Response): Promise<void> {
  try {
    const treasuryData = await prisma.treasury.findMany();
    res.status(200);
    res.send(treasuryData);
  } catch (error) {
    console.log("Error: ", error);
    res.sendStatus(500);
  }
}

async function updateCurrent(req: Request, res: Response): Promise<void> {
  try {
    await prisma.treasury.updateMany({
      where: { current: true },
      data: {
        amount: {
          increment: req.body.amount,
        },
      },
    });
    res.sendStatus(204);
  } catch (error) {
    console.log("Error: ", error);
    res.sendStatus(500);
  }
}

async function createTreasury(req: Request, res: Response) {
  try {
    await prisma.treasury.updateMany({
      data: {
        current: false,
      },
    });
    const newTreasury = await prisma.treasury.create({
      data: {
        amount: 0,
        distributionDate: req.body.date,
        current: true,
      },
    });
    res.status(201);
    res.send(newTreasury);
  } catch (error) {
    console.log("Error: ", error);
    res.sendStatus(500);
  }
}

async function deleteAllTreasuries(req: Request, res: Response) {
  try {
    await prisma.treasury.deleteMany({});
    res.sendStatus(204);
  } catch (error) {
    console.log("Error: ", error);
    res.sendStatus(500);
  }
}

export {
  getTreasuries,
  createTreasury,
  updateCurrent,
  deleteAllTreasuries,
};
