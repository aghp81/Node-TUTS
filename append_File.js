const fs = require('fs');

const additionalContent = "\nاین یک متن اضافه است.";

fs.appendFile('example.txt', additionalContent, (err) => {
    if (err) {
        console.error('خطا در افزودن به فایل:', err);
        return;
    }
    console.log('محتوای جدید اضافه شد!');
});
