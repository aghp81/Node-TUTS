const fs = require("fs");

console.log("شروع خواندن فایل...");
const data = fs.readFileSync("bigfile.txt", "utf-8");
console.log(data);
console.log("پایان خواندن فایل.");