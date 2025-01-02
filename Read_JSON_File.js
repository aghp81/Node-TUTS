const fs = require('fs');

// فایل data.json به صورت متنی خوانده می‌شود.
// سپس با JSON.parse محتوای متنی به یک شیء جاوااسکریپت تبدیل می‌شود.

fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
        console.error('خطا در خواندن فایل:', err);
        return;
    }

    // تبدیل JSON به شیء جاوااسکریپت
    const jsonData = JSON.parse(data);
    console.log('محتوای فایل JSON:', jsonData);
});
