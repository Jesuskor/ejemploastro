import { db, Iplog } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Iplog).values([
        {
            id: 1,
            ip: '192.168.0.1',
            pais: 'USA',
            region: 'California',
            ciudad: 'Los Angeles',
            latitud: '34.0522',
            longitud: '-118.2437',
            zona: 'PST'
        }
    ]);
}
