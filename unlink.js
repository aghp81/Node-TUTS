const fs = require('fs');

fs.unlink('example.txt', (err) => {
    if (err) {
        console.error('خطا در حذف فایل:', err);
        return;
    }
    console.log('فایل با موفقیت حذف شد!');
});
