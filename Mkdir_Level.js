const fs = require('fs');

// ایجاد چند سطح پوشه

// ایجاد چند سطح پوشه: fs.mkdir با تنظیم recursive: true امکان ایجاد چند سطح پوشه را فراهم می‌کند:


fs.mkdir('parent/child/grandchild', { recursive: true }, (err) => {
    if (err) throw err;
    console.log('پوشه‌ها ایجاد شدند.');
});
