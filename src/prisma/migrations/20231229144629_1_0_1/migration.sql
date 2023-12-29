/*
  Warnings:

  - A unique constraint covering the columns `[google_provider_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User_google_provider_id_key" ON "User"("google_provider_id");
