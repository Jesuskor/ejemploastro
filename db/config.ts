import { defineDb, defineTable, column } from 'astro:db';

const Iplog = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    ip: column.text(),
    pais: column.text(),
    region: column.text(),
    ciudad: column.text(),
    latitud: column.text(),
    longitud: column.text(),
    zona: column.text(),
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: {
    Iplog,
  }
});
