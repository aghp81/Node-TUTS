const fs = require('fs');

fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
        console.error('خطا در خواندن فایل:', err);
        return;
    }

    // تبدیل JSON به شیء جاوااسکریپت
    const jsonData = JSON.parse(data);
    console.log('محتوای فایل JSON:', jsonData);
});
