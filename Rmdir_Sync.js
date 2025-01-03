const fs = require('fs');

// حذف پوشه همزمان
// نکته: از rmdir تنها برای حذف پوشه‌های خالی استفاده کنید. برای حذف پوشه‌های دارای محتوا، از fs.rm یا ابزارهای مدیریت فایل‌های دیگر استفاده کنید.

try {
    fs.rmdirSync('myFolder');
    console.log('پوشه با موفقیت حذف شد.');
} catch (err) {
    console.error('خطا در حذف پوشه:', err.message);
}
