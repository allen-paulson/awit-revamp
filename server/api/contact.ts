const RECIPIENTS = ["uday@artworksit.com", "ashwin@artworksit.com"];

const escapeHtml = (value: unknown) =>
  String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const body = await readBody<Record<string, unknown>>(event);
  const bodyJson = JSON.stringify(body);

  const db = (event.context.cloudflare?.env as any)?.DB;
  if (!db) {
    throw createError({
      statusCode: 503,
      statusMessage: "Submission storage is unavailable",
    });
  }

  try {
    await db
      .prepare(
        "INSERT INTO form_submissions (form_id, data, created_at) VALUES (?1, ?2, ?3)",
      )
      .bind("contact", bodyJson, new Date().toISOString())
      .run();
  } catch (error) {
    console.error("D1 contact submission failed", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Unable to save contact submission",
    });
  }

  const fields = [
    ["Name", body.name],
    ["Preferred contact method", body.contactType],
    ["Email", body.email],
    ["Phone", body.phone],
    ["Looking for", body.looking],
    ["Project name", body.projectName],
    ["Timeline", body.timeline],
    ["Message", body.message],
  ];

  const htmlbody = `
    <h2>New contact form submission</h2>
    <table cellpadding="8" cellspacing="0" style="border-collapse: collapse;">
      ${fields
        .map(
          ([label, value]) => `
            <tr>
              <th align="left" valign="top" style="border-bottom: 1px solid #ddd;">${escapeHtml(label)}</th>
              <td style="border-bottom: 1px solid #ddd; white-space: pre-wrap;">${escapeHtml(value) || "—"}</td>
            </tr>`,
        )
        .join("")}
    </table>`;

  try {
    if (!config.zeptoMailApiKey || !config.zeptoMailFromAddress) {
      throw new Error("ZeptoMail is not configured");
    }

    const apiKey = String(config.zeptoMailApiKey).trim();
    const authorization = apiKey.startsWith("Zoho-enczapikey ")
      ? apiKey
      : `Zoho-enczapikey ${apiKey}`;
    const response = await fetch(String(config.zeptoMailApiUrl), {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: {
          address: config.zeptoMailFromAddress,
          name: "ArtWorksIT Website",
        },
        to: RECIPIENTS.map((address) => ({
          email_address: {
            address,
            name: address === "uday@artworksit.com" ? "Uday" : "Ashwin",
          },
        })),
        subject: `New website enquiry from ${String(body.name || "a visitor")}`,
        htmlbody,
      }),
    });

    if (!response.ok) {
      const responseBody = await response.text();
      throw new Error(
        `ZeptoMail returned HTTP ${response.status}: ${responseBody.slice(0, 2_000)}`,
      );
    }
  } catch (error) {
    console.error("ZeptoMail contact notification failed", error);
  }

  return { success: true };
});
