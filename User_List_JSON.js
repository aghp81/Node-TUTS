const fs = require('fs');

fs.readFile('users.json', 'utf8', (err, data) => {
    if (err) {
        console.error('خطا در خواندن فایل:', err);
        return;
    }

    let users;
    try {
        users = JSON.parse(data || '[]'); // بررسی و مقداردهی اولیه در صورت خالی بودن فایل
    } catch (err) {
        console.error('خطا در تبدیل JSON:', err.message);
        users = []; // مقداردهی پیش‌فرض در صورت نامعتبر بودن JSON
    }

    if (!Array.isArray(users)) {
        console.error('فرمت فایل JSON نادرست است. باید یک آرایه باشد.');
        return;
    }

    users.push({
        id: users.length + 1,
        name: "زهرا",
        age: 25,
    });

    fs.writeFile('users.json', JSON.stringify(users, null, 2), (err) => {
        if (err) {
            console.error('خطا در نوشتن فایل JSON:', err);
            return;
        }
        console.log('کاربر جدید اضافه شد!');
    });
});
