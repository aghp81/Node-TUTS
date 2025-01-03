const fs = require('fs');

// خواندن اطلاعات فولدر

// متد: fs.stat یا fs.lstat

// اطلاعات دقیق‌تری مانند سایز فایل، زمان ایجاد و ... را ارائه می‌دهد.

fs.stat('myFolder', (err, stats) => {
    if (err) {
        console.error('خطا در دریافت اطلاعات:', err.message);
        return;
    }
    console.log('اطلاعات پوشه:', stats);
});
