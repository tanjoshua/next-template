import {
    integer,
    pgTable,
    varchar,
} from 'drizzle-orm/pg-core';

export const UsersTable = pgTable("users", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 255 }).notNull(),
});