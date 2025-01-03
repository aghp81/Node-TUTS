const fs = require('fs');

// حذف فولدرها با محتویات همزمان

try {
    fs.rmSync('myFolder', { recursive: true, force: true });
    console.log('پوشه و محتوای آن با موفقیت حذف شد.');
} catch (err) {
    console.error('خطا در حذف پوشه:', err.message);
}
