const fs = require('fs');

try {
  const data = fs.readFileSync('example.txt', 'utf8');
  console.log('محتوای فایل:', data);
} catch (err) {
  console.error('خطا:', err);
}
