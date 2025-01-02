const fs = require('fs');

// خواندن فایل JSON
fs.readFile('users.json', 'utf8', (err, data) => {
    if (err) {
        console.error('خطا در خواندن فایل:', err);
        return;
    }

    // تبدیل JSON به آرایه
    const users = JSON.parse(data);

    // اضافه کردن کاربر جدید
    users.push({
        id: users.length + 1,
        name: "زهرا",
        age: 25
    });

    // ذخیره دوباره فایل
    fs.writeFile('users.json', JSON.stringify(users, null, 2), (err) => {
        if (err) {
            console.error('خطا در نوشتن فایل:', err);
            return;
        }
        console.log('کاربر جدید اضافه شد!');
    });
});
