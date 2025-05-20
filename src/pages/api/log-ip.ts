export const prerender = false;

import type { APIRoute } from 'astro';
import { db, Iplog } from 'astro:db';

export const POST: APIRoute = async ({ request }) => {
    let body;
    try {
        body = await request.json();
    } catch {
        return new Response(JSON.stringify({ success: false, error: 'JSON inválido' }), { status: 400 });
    }

    const { ip, pais, region, ciudad, latitud, longitud, zona } = body || {};

    if (!ip) {
        return new Response(JSON.stringify({ success: false, error: 'Faltan datos' }), { status: 400 });
    }

    await db.insert(Iplog).values({
        ip,
        pais,
        region,
        ciudad,
        latitud,
        longitud,
        zona,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
};