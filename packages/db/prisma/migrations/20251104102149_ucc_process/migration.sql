/*
  Warnings:

  - A unique constraint covering the columns `[uccCode]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "elogAuthenticated" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "fatcaSubmitted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "nseLastUpdated" TIMESTAMP(3),
ADD COLUMN     "nseStatus" TEXT,
ADD COLUMN     "uccCode" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_uccCode_key" ON "User"("uccCode");
