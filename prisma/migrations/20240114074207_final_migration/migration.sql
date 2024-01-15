/*
  Warnings:

  - Added the required column `image` to the `Shoe` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Shoe" ADD COLUMN     "image" TEXT NOT NULL;
