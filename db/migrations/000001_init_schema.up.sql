CREATE TABLE `accounts` (
  `id` bigint UNIQUE PRIMARY KEY NOT NULL,
  `email` varchar(255) UNIQUE NOT NULL,
  `name` varchar(255) NOT NULL,
  `role` bigint NOT NULL,
  `avatar` bigint,
  `created_at` timestamp NOT NULL DEFAULT (now()),
  `updated_at` timestamp NOT NULL DEFAULT (now())
);

CREATE TABLE `roles` (
  `id` bigint UNIQUE PRIMARY KEY NOT NULL,
  `name` varchar(255) UNIQUE NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT (now()),
  `updated_at` timestamp NOT NULL DEFAULT (now())
);

CREATE TABLE `asset` (
  `id` bigint UNIQUE PRIMARY KEY NOT NULL,
  `description` text,
  `type` varchar(20),
  `url` text,
  `created_at` timestamp NOT NULL DEFAULT (now()),
  `updated_at` timestamp NOT NULL DEFAULT (now())
);

CREATE TABLE `event` (
  `id` bigint UNIQUE PRIMARY KEY NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `location` varchar(255) NOT NULL,
  `department` varchar(255) NOT NULL,
  `date` timestamp NOT NULL,
  `promotional_image` bigint,
  `created_at` timestamp NOT NULL DEFAULT (now()),
  `updated_at` timestamp NOT NULL DEFAULT (now())
);

CREATE TABLE `participants` (
  `id` bigint UNIQUE PRIMARY KEY NOT NULL,
  `event_id` bigint,
  `account_id` bigint
);

CREATE TABLE `attendance` (
  `id` bigint UNIQUE PRIMARY KEY NOT NULL,
  `event_id` bigint,
  `account_id` bigint
);

ALTER TABLE `accounts` ADD FOREIGN KEY (`role`) REFERENCES `roles` (`id`);

ALTER TABLE `accounts` ADD FOREIGN KEY (`avatar`) REFERENCES `asset` (`id`);

ALTER TABLE `event` ADD FOREIGN KEY (`promotional_image`) REFERENCES `asset` (`id`);

ALTER TABLE `participants` ADD FOREIGN KEY (`event_id`) REFERENCES `event` (`id`);

ALTER TABLE `participants` ADD FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`);

ALTER TABLE `attendance` ADD FOREIGN KEY (`event_id`) REFERENCES `event` (`id`);

ALTER TABLE `attendance` ADD FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`);
