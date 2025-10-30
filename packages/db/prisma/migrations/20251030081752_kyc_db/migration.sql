/*
  Warnings:

  - You are about to drop the column `digilockerToken` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[digilockerKycId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[digilockerid]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "KycType" AS ENUM ('VALIDATED', 'REGISTERED', 'ON_HOLD');

-- CreateEnum
CREATE TYPE "KycSessionStatus" AS ENUM ('INITIATED', 'REDIRECTED', 'AUTHENTICATED', 'COMPLETED', 'FAILED', 'EXPIRED');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "KycStatus" ADD VALUE 'IN_PROGRESS';
ALTER TYPE "KycStatus" ADD VALUE 'EXPIRED';

-- AlterTable
ALTER TABLE "User" DROP COLUMN "digilockerToken",
ADD COLUMN     "aadhaarLastFour" TEXT,
ADD COLUMN     "aadhaarLinked" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "addressLine1" TEXT,
ADD COLUMN     "addressLine2" TEXT,
ADD COLUMN     "city" TEXT,
ADD COLUMN     "country" TEXT DEFAULT 'India',
ADD COLUMN     "digilockerKycId" TEXT,
ADD COLUMN     "digilockerid" TEXT,
ADD COLUMN     "dlAccessToken" TEXT,
ADD COLUMN     "dlRefreshToken" TEXT,
ADD COLUMN     "dlTokenExpiresAt" TIMESTAMP(3),
ADD COLUMN     "kraVerified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "kycType" "KycType",
ADD COLUMN     "kycVerifiedAt" TIMESTAMP(3),
ADD COLUMN     "pincode" TEXT,
ADD COLUMN     "state" TEXT;

-- CreateTable
CREATE TABLE "KycSession" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "codeVerifier" TEXT NOT NULL,
    "status" "KycSessionStatus" NOT NULL DEFAULT 'INITIATED',
    "errorCode" TEXT,
    "errorMessage" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "KycSession_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "KycSession_state_key" ON "KycSession"("state");

-- CreateIndex
CREATE INDEX "KycSession_userId_idx" ON "KycSession"("userId");

-- CreateIndex
CREATE INDEX "KycSession_state_idx" ON "KycSession"("state");

-- CreateIndex
CREATE UNIQUE INDEX "User_digilockerKycId_key" ON "User"("digilockerKycId");

-- CreateIndex
CREATE UNIQUE INDEX "User_digilockerid_key" ON "User"("digilockerid");

-- AddForeignKey
ALTER TABLE "KycSession" ADD CONSTRAINT "KycSession_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
