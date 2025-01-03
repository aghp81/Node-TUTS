const fs = require('fs');

// خواندن محتویات یک پوشه همزمان

try {
    const files = fs.readdirSync('./');
    console.log('فایل‌ها و پوشه‌های موجود:', files);
} catch (err) {
    console.error('خطا در خواندن پوشه:', err.message);
}
