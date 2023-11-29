-- CreateEnum
CREATE TYPE "Status" AS ENUM ('todo', 'done', 'inProgress');

-- CreateTable
CREATE TABLE "Todo" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "status" "Status" NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);
