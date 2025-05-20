import { createRemoteDatabaseClient, asDrizzleTable } from '@astrojs/db/runtime';
import '@astrojs/db/dist/runtime/virtual.js';

const db = await createRemoteDatabaseClient({
  dbType: "libsql",
  remoteUrl: "libsql://iplog-jesuskor.aws-us-east-1.turso.io",
  appToken: process.env.ASTRO_DB_APP_TOKEN ?? "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NDc3MTc3NjcsImlkIjoiZWQzOGU0N2EtNzQ4Yy00N2EwLTg0N2ItODYwMDkyNDgzMDk5IiwicmlkIjoiZGUyYTRiMzUtNDY2Mi00ZTRkLTgwY2MtMGZiOWY5YWQ4ODU1In0.7hTAxkrkAsq2IbStcFebTbFm6eVkg-twZi-fec-RvlYb8y_J0yH2YuD2CtzkFp5U3TKluIz3IeNuWvkyi_B4AQ"
});
const Iplog = asDrizzleTable("Iplog", { "columns": { "id": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Iplog", "primaryKey": true } }, "ip": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "ip", "collection": "Iplog", "primaryKey": false, "optional": false } }, "pais": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "pais", "collection": "Iplog", "primaryKey": false, "optional": false } }, "region": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "region", "collection": "Iplog", "primaryKey": false, "optional": false } }, "ciudad": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "ciudad", "collection": "Iplog", "primaryKey": false, "optional": false } }, "latitud": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "latitud", "collection": "Iplog", "primaryKey": false, "optional": false } }, "longitud": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "longitud", "collection": "Iplog", "primaryKey": false, "optional": false } }, "zona": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "zona", "collection": "Iplog", "primaryKey": false, "optional": false } } }, "deprecated": false, "indexes": {} }, false);

export { Iplog as I, db as d };
