export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const body = await readBody(event);
    const bodyJson = JSON.stringify(body);

    const db = (event.context.cloudflare?.env as any)?.DB;
    if (db) {
        try {
            await db
                .prepare("INSERT INTO form_submissions (form_id, data, created_at) VALUES (?1, ?2, ?3)")
                .bind("contact", bodyJson, new Date().toISOString())
                .run();
        } catch (e) {
            console.error("D1 insert failed:", e);
        }
    }

    if (config.laravelApiBaseUrl && config.backendApiSecret) {
        try {
            const response = await fetch(config.laravelApiBaseUrl + "/api/contact", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    apikey: config.backendApiSecret,
                },
                body: bodyJson,
            });

            const data = await response.json();

            if (!response.ok) {
                const isValidationError = response.status === 422 && data.errors;
                throw createError({
                    statusCode: isValidationError ? 422 : response.status,
                    statusMessage: data.message || "Request failed",
                    data: { errors: isValidationError ? data.errors : null },
                });
            }
        } catch (err) {
            throw err;
        }
    }

    return { success: true };
});
