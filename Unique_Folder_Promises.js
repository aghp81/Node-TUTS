const fs = require('fs/promises');

// استفاده از fs.promises برای نسخه‌های غیرهمزمان
// مثال ایجاد پوشه


async function createUniqueFolder(folderName) {
    let uniqueFolderName = folderName;
    let counter = 1;

    while (true) {
        try {
            await fs.access(uniqueFolderName); // بررسی وجود
            uniqueFolderName = `${folderName}_${counter}`;
            counter++;
        } catch {
            // اگر پوشه وجود نداشت
            await fs.mkdir(uniqueFolderName);
            console.log(`پوشه "${uniqueFolderName}" با موفقیت ایجاد شد.`);
            break;
        }
    }
}

createUniqueFolder('exampleFolder');
