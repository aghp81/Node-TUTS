const fs = require('fs');

// برای بررسی وجود یک پوشه (یا فایل).
const folderName = 'myFolder';

if (fs.existsSync(folderName)) {
    console.log(`پوشه ${folderName} وجود دارد.`);
} else {
    console.log(`پوشه ${folderName} وجود ندارد.`);
}
