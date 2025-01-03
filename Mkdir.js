const fs = require('fs');

// ایجاد فولدر غیرهمزمان

// 'myFolder': نام یا مسیر پوشه‌ای که باید ایجاد شود.
// recursive: true: اگر true باشد، پوشه و پوشه‌های والد لازم را ایجاد می‌کند.

fs.mkdir('myFolder', { recursive: true }, (err) => {
    if (err) {
        console.error('خطا در ایجاد پوشه:', err.message);
        return;
    }
    console.log('پوشه با موفقیت ایجاد شد.');
});
