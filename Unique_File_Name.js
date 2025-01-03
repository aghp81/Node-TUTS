const fs = require('fs');


let fileName = 'exampleFile.txt';
let counter = 1;

while (fs.existsSync(fileName)) {
    fileName = `exampleFile_${counter}.txt`;
    counter++;
}

fs.writeFileSync(fileName, 'محتوای فایل نمونه');
console.log(`فایل "${fileName}" ایجاد شد.`);
