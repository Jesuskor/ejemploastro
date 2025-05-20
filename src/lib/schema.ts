// lib/schema.ts
import { sqliteTable, text, real } from 'drizzle-orm/sqlite-core';

export const ipLogs = sqliteTable('iplogs', {
    id: text('id').primaryKey(),
    ip: text('ip').notNull(),
    pais: text('pais'),
    region: text('region'),
    ciudad: text('ciudad'),
    latitud: real('latitud'),
    longitud: real('longitud'),
    zona: text('zona'),
});
