-- CreateTable
CREATE TABLE "Treasury" (
    "id" SERIAL NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "distributionDate" TEXT NOT NULL,

    CONSTRAINT "Treasury_pkey" PRIMARY KEY ("id")
);
