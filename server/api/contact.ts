export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const body = JSON.stringify(await readBody(event));

    console.log(body);

    const db = (event.context.cloudflare?.env as any)?.DB;
    if (db) {
        try {
            await db.prepare("INSERT INTO form_submissions (form_id, data, created_at) VALUES (?1, ?2, ?3)")
                .bind("contact", body, new Date().toISOString())
                .run();
        } catch (e) {
            console.error("D1 insert failed:", e);
        }
    }

    const url = config.laravelApiBaseUrl + "/api" + path;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                Accept: "application/json",
                apikey: config.backendApiSecret,
            },
            body: body,
        });

        const data = await response.json();

        if (!response.ok) {
            const isValidationError = response.status === 422 && data.errors;

            throw createError({
                statusCode: isValidationError ? 422 : response.status,
                statusMessage: data.message || "Validation error",
                data: {
                    errors: isValidationError ? data.errors : null,
                },
            });
        }

        return response.success ? { success: true } : { success: false, message: "Form submission failed" };

    } catch (err) {
        throw err;
    }
});
