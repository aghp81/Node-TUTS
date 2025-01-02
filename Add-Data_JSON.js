const fs = require('fs');

// ابتدا فایل JSON خوانده می‌شود.
// به داده‌ها، اطلاعات جدید اضافه می‌شود.
// فایل JSON دوباره ذخیره می‌شود.

// خواندن فایل موجود
fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
        console.error('خطا در خواندن فایل:', err);
        return;
    }

    // تبدیل JSON به شیء
    const jsonData = JSON.parse(data);

    // افزودن داده جدید
    jsonData.email = "ali@example.com";

    // بازنویسی فایل JSON
    fs.writeFile('data.json', JSON.stringify(jsonData, null, 2), (err) => {
        if (err) {
            console.error('خطا در نوشتن فایل JSON:', err);
            return;
        }
        console.log('داده جدید اضافه شد!');
    });
});
