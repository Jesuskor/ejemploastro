import { d as db, I as Iplog } from '../../chunks/_astro_db_C69-PCI-.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  let body;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ success: false, error: "JSON inválido" }), { status: 400 });
  }
  const { ip, pais, region, ciudad, latitud, longitud, zona } = body || {};
  if (!ip) {
    return new Response(JSON.stringify({ success: false, error: "Faltan datos" }), { status: 400 });
  }
  await db.insert(Iplog).values({
    ip,
    pais,
    region,
    ciudad,
    latitud,
    longitud,
    zona
  });
  return new Response(JSON.stringify({ success: true }), { status: 200 });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
