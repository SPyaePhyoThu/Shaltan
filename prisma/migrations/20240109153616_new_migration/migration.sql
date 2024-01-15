/*
  Warnings:

  - You are about to drop the `ShoeSize` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `shoeId` to the `Size` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stock` to the `Size` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ShoeSize" DROP CONSTRAINT "ShoeSize_shoeId_fkey";

-- DropForeignKey
ALTER TABLE "ShoeSize" DROP CONSTRAINT "ShoeSize_sizeId_fkey";

-- AlterTable
ALTER TABLE "Size" ADD COLUMN     "shoeId" INTEGER NOT NULL,
ADD COLUMN     "stock" INTEGER NOT NULL;

-- DropTable
DROP TABLE "ShoeSize";

-- AddForeignKey
ALTER TABLE "Size" ADD CONSTRAINT "Size_shoeId_fkey" FOREIGN KEY ("shoeId") REFERENCES "Shoe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
