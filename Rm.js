const fs = require('fs');

// حذف فولدرها با محتویات غیرهمزمان

fs.rm('myFolder', { recursive: true, force: true }, (err) => {
    if (err) {
        console.error('خطا در حذف پوشه:', err.message);
        return;
    }
    console.log('پوشه و محتوای آن با موفقیت حذف شد.');
});
