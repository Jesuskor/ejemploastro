// src/pages/api/log-ip.ts
import type { APIRoute } from 'astro';
import { db } from '@/lib/db';
import { ipLogs } from '@/lib/schema';
import { randomUUID } from 'crypto';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
    const body = await request.json();
    const { ip, pais, region, ciudad, latitud, longitud, zona } = body || {};

    if (!ip) {
        return new Response(JSON.stringify({ success: false, error: 'Faltan datos' }), { status: 400 });
    }

    try {
        await db.insert(ipLogs).values({
            id: randomUUID(),
            ip,
            pais,
            region,
            ciudad,
            latitud,
            longitud,
            zona,
        });

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (err) {
        console.error(err);
        return new Response(JSON.stringify({ success: false, error: 'Error al insertar' }), { status: 500 });
    }
};
