const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// استفاده از کتابخانه‌های کمکی

// در پروژه‌های پیچیده می‌توانید از کتابخانه‌های موجود مثل uuid یا uniqid برای ایجاد نام‌های یکتا استفاده کنید.
// با استفاده از uuid:


const folderName = `exampleFolder_${uuidv4()}`;
fs.mkdirSync(folderName);
console.log(`پوشه "${folderName}" با موفقیت ایجاد شد.`);
