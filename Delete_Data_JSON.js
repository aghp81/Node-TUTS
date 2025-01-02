const fs = require('fs');

// خواندن فایل موجود
fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
        console.error('خطا در خواندن فایل:', err);
        return;
    }

    // تبدیل JSON به شیء
    const jsonData = JSON.parse(data);

    // حذف یک مقدار
    delete jsonData.age;

    // بازنویسی فایل JSON
    fs.writeFile('data.json', JSON.stringify(jsonData, null, 2), (err) => {
        if (err) {
            console.error('خطا در نوشتن فایل JSON:', err);
            return;
        }
        console.log('داده حذف شد!');
    });
});
