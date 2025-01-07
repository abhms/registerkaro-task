import { text, pgTable } from "drizzle-orm/pg-core";
import crypto from "crypto";

export const companies = pgTable("companies", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name").notNull(),
  description: text("description"),
  directorname: text("directorname"),

});
