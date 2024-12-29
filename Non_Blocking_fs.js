const fs = require("fs");

console.log("شروع خواندن فایل...");
fs.readFile("bigfile.txt", "utf-8", (err, data) => {
    if (err) {
        console.error("خطا در خواندن فایل:", err);
        return;
    }
    console.log(data);
});
console.log("پایان خواندن فایل.");
