-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL,
    `username` VARCHAR(30) NOT NULL,
    `email` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
