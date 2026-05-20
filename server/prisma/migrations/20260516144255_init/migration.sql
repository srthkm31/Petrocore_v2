-- CreateTable
CREATE TABLE "Resume" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "storagePath" TEXT NOT NULL,
    "mailDelivered" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Resume_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Resume_email_key" ON "Resume"("email");
