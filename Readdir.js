const fs = require('fs');

// جستجو در فولدر - خواندن محتویات پوشه غیرهمزمان

fs.readdir('./', (err, files) => {
    if (err) {
        console.error('خطا در خواندن پوشه:', err.message);
        return;
    }
    console.log('فایل‌ها و پوشه‌های موجود:', files);
});
