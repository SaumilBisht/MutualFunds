-- AlterTable
ALTER TABLE "User" ADD COLUMN     "nomineeAddressLine1" TEXT,
ADD COLUMN     "nomineeAddressLine2" TEXT,
ADD COLUMN     "nomineeAllocation" DOUBLE PRECISION,
ADD COLUMN     "nomineeCity" TEXT,
ADD COLUMN     "nomineeCountry" TEXT,
ADD COLUMN     "nomineeDob" TIMESTAMP(3),
ADD COLUMN     "nomineeEmail" TEXT,
ADD COLUMN     "nomineeIdNumber" TEXT,
ADD COLUMN     "nomineeIdType" TEXT,
ADD COLUMN     "nomineeMobile" TEXT,
ADD COLUMN     "nomineePincode" TEXT;
