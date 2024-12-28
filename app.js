const http = require("http");

console.log('Node.js نصب شد و کار می‌کند!');


// چاپ پیام در کنسول
console.log("سلام دنیا! این اولین برنامه Node.js من است!");

// یک عملیات ساده ریاضی
let sum = 5 + 7;
console.log("مجموع 5 و 7 برابر است با:", sum);


// ایجاد سرور
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("سلام! این اولین سرور Node.js من است!");
});

// سرور روی پورت 3000 اجرا می‌شود
server.listen(3000, () => {
    console.log("سرور در حال اجرا است: http://localhost:3000");
});

