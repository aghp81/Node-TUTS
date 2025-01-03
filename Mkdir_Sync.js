const fs = require('fs');

// ساخت پوشه همزمان

try {
    fs.mkdirSync('myFolder', { recursive: true });
    console.log('پوشه با موفقیت ایجاد شد.');
} catch (err) {
    console.error('خطا در ایجاد پوشه:', err.message);
}
