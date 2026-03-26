export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);
  const bodyJson = JSON.stringify(body);

  const db = (event.context.cloudflare?.env as any)?.DB;
  if (db) {
    try {
      await db
        .prepare(
          "INSERT INTO form_submissions (form_id, data, created_at) VALUES (?1, ?2, ?3)",
        )
        .bind("contact", bodyJson, new Date().toISOString())
        .run();
    } catch {}
  }

  return { success: true };
});
