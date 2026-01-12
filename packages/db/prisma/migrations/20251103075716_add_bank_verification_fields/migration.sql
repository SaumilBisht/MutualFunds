-- AlterTable
ALTER TABLE "User" ADD COLUMN     "bankAccountHolderName" TEXT,
ADD COLUMN     "bankAccountType" TEXT,
ADD COLUMN     "bankBeneficiaryName" TEXT,
ADD COLUMN     "bankBranchName" TEXT,
ADD COLUMN     "bankName" TEXT,
ADD COLUMN     "bankNameMatchScore" INTEGER,
ADD COLUMN     "bankVerified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "bankVerifiedAt" TIMESTAMP(3);
