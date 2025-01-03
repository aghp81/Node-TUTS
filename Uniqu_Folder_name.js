const fs = require('fs');

// اگر فایل یا پوشه تکراری بود، می‌توانید نام جدیدی برای آن انتخاب کنید (مانند افزودن شمارنده).
// ایجاد پوشه با نام یکتا


let folderName = 'exampleFolder';
let counter = 1;

while (fs.existsSync(folderName)) {
    folderName = `exampleFolder_${counter}`;
    counter++;
}

fs.mkdirSync(folderName);
console.log(`پوشه "${folderName}" با موفقیت ایجاد شد.`);
