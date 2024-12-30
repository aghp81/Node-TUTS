const fs = require('fs');

// خواندن فایل به صورت غیرهمزمان
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('خطایی رخ داده است:', err);
    return;
  }
  console.log('محتوای فایل:', data);
});
