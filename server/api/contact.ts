import { H3Event } from "h3";

export default defineEventHandler(async (event: H3Event) => {
    try {
        const db = hubDatabase();
        if (!db) {
            return { success: false, message: "Database connection error" };
        }

        const formId = "0195cbbe-2a48-70e6-afd2-e1a7025c4a91";
        if (!formId) {
            return { success: false, message: "An error occurred while submitting the form" };
        }

        const body = JSON.stringify(await readBody(event));
        const success = await saveFormSubmission(formId, body);

        await pingWebhook(`https://forms.artworksit.com/form-submission`, { formId: formId });

        return success ? { success: true } : { success: false, message: "Form submission failed" };
    } catch (error) {
        return { success: false, message: "An error occurred while submitting the form" };
    }
});

async function pingWebhook(url: string, data: any): Promise<void> {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    } catch (error) {}
}

async function saveFormSubmission(formId: string, body: string): Promise<boolean> {
    try {
        const now = new Date().toISOString();

        const statement = await hubDatabase().prepare("INSERT INTO form_submissions (form_id, data, created_at) VALUES (?1, ?2, ?3)").bind(formId, body, now).run();

        return true;
    } catch (error) {
        return false;
    }
}
