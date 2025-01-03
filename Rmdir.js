const fs = require('fs');

// حذف پوشه غیرهمزمان

fs.rmdir('myFolder', (err) => {
    if (err) {
        console.error('خطا در حذف پوشه:', err.message);
        return;
    }
    console.log('پوشه با موفقیت حذف شد.');
});
