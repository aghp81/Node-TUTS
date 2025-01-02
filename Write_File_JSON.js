const fs = require('fs');

// داده‌ها در قالب یک شیء تعریف می‌شوند.
// از JSON.stringify برای تبدیل شیء به رشته JSON استفاده می‌شود.
// فایل JSON جدید ساخته یا بازنویسی می‌شود.

const data = {
    name: "علی",
    age: 30,
    profession: "برنامه‌نویس"
};

// تبدیل شیء جاوااسکریپت به فرمت JSON
const jsonData = JSON.stringify(data, null, 2);

fs.writeFile('data.json', jsonData, (err) => {
    if (err) {
        console.error('خطا در نوشتن فایل JSON:', err);
        return;
    }
    console.log('فایل JSON با موفقیت ذخیره شد!');
});
