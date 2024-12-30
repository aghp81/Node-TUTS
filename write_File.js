const fs = require('fs');

const content = "این یک متن جدید است.";

fs.writeFile('example.txt', content, (err) => {
    if (err) {
        console.error('خطا در نوشتن فایل:', err);
        return;
    }
    console.log('فایل با موفقیت ذخیره شد!');
});
