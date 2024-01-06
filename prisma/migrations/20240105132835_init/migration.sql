-- CreateTable
CREATE TABLE `log_trx_api` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `api` VARCHAR(191) NOT NULL,
    `request` VARCHAR(191) NOT NULL,
    `response` VARCHAR(191) NOT NULL,
    `insert_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
