const fs = require('fs');

// مدیریت فایل‌های موجود در پوشه: اگر می‌خواهید لیست فایل‌های خاصی را پیدا کنید (مانند .txt)، می‌توانید از فیلتر استفاده کنید:


fs.readdir('./', (err, files) => {
    if (err) throw err;
    const txtFiles = files.filter(file => file.endsWith('.txt'));
    console.log('فایل‌های txt:', txtFiles);
});
