/*
  Warnings:

  - You are about to drop the column `price` on the `Shoe` table. All the data in the column will be lost.
  - Added the required column `numeric(10,2)` to the `Shoe` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Shoe" DROP COLUMN "price",
ADD COLUMN     "numeric(10,2)" DECIMAL(65,30) NOT NULL;
