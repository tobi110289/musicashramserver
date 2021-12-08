/*
  Warnings:

  - Added the required column `current` to the `Treasury` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Treasury" ADD COLUMN     "current" BOOLEAN NOT NULL;
