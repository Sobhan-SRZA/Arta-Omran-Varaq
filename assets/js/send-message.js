document.querySelector("form")
    .addEventListener("submit", async function (e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const submitButton = form.querySelector("button[type=\"submit\"]");
        const savedLang = localStorage.getItem("language");
        const lang = savedLang || getBrowserLanguage();
        const selected_region = region[lang];

        submitButton.disabled = true;
        submitButton.textContent = selected_region["contact__form-submit-sending"];
        // setTimeout(() => {
        //     submitButton.disabled = false;
        //     submitButton.textContent = selected_region["contact__form-submit"];
        // }, 3000);
        try {
            alert(([...formData]))
            alert(form.action)
            const response = await fetch(form.action, {
                method: "POST",
                body: new URLSearchParams([...formData]),
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                }
            });

            const result = await response.json();

            if (result.success) {
                alert(result.message || "پیام شما با موفقیت ارسال شد!");
                form.reset();
            }

            else {
                alert("❌ " + (result.error || "خطایی رخ داده است"));
                alert("❌ " + (result.details || "خطایی رخ داده است"));
            }
        }

        catch (error) {
            console.error(error);
            alert(error);
            alert("⚠️ خطای شبکه: لطفاً اتصال اینترنت خود را بررسی کنید.");
        }

        finally {
            submitButton.disabled = false;
            submitButton.textContent = selected_region["contact__form-submit"];
        }
    });

// Add this to Google Script https://script.google.com/
function doPost(e) {
    const params = e.parameters;

    const botToken = "YOUR_BOT_TOKEN";
    const chatId = "YOUR_CHAT_ID";

    const name = params.name ? params.name[0] : "نامشخص";
    const email = params.email ? params.email[0] : "نامشخص";
    const message = params.message ? params.message[0] : "بدون پیام";

    if (!name || name.length < 2)
        return ContentService
            .createTextOutput(JSON.stringify({
                success: false,
                error: "نام باید حداقل 2 حرف باشد"
            }))
            .setMimeType(ContentService.MimeType.JSON);

    if (!message || message.length < 5)
        return ContentService
            .createTextOutput(JSON.stringify({
                success: false,
                error: "پیام باید حداقل 5 حرف باشد"
            }))
            .setMimeType(ContentService.MimeType.JSON);

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
        return ContentService
            .createTextOutput(JSON.stringify({
                success: false,
                error: "ایمیل معتبر نیست"
            }))
            .setMimeType(ContentService.MimeType.JSON);

    const ip = e.environment || "unknown";
    const cache = CacheService.getScriptCache();
    const key = `rate_limit_${ip}`;

    if (cache.get(key))
        return ContentService
            .createTextOutput(JSON.stringify({
                success: false,
                error: "لطفاً 30 ثانیه صبر کنید و دوباره تلاش کنید"
            }))
            .setMimeType(ContentService.MimeType.JSON);

    cache.put(key, "1", 30);

    const telegramMessage = `پیام جدید از وبسایت:
**👤 نام:** ${name}
**📧 ایمیل:** ${email}
**📝 پیام:** 
${message}`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const options = {
        "method": "post",
        "contentType": "application/json",
        "payload": JSON.stringify({
            chat_id: chatId,
            text: telegramMessage,
            parse_mode: "Markdown"
        })
    };

    try {
        const response = UrlFetchApp.fetch(url, options);
        const responseData = JSON.parse(response.getContentText());

        if (responseData.ok)
            return ContentService
                .createTextOutput(JSON.stringify({
                    success: true,
                    message: "پیام با موفقیت ارسال شد"
                }))
                .setMimeType(ContentService.MimeType.JSON);

        else
            return ContentService
                .createTextOutput(JSON.stringify({
                    success: false,
                    error: "خطا در ارسال به تلگرام",
                    details: responseData
                }))
                .setMimeType(ContentService.MimeType.JSON);
    }

    catch (error) {
        return ContentService
            .createTextOutput(JSON.stringify({
                success: false,
                error: "خطای سرور",
                details: error.message
            }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}