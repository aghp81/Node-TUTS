const fs = require('fs');

fs.rename('example.txt', 'newExample.txt', (err) => {
    if (err) {
        console.error('خطا در تغییر نام فایل:', err);
        return;
    }
    console.log('نام فایل با موفقیت تغییر یافت!');
});
