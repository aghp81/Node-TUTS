const http = require("http");

// ایجاد سرور
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("سلام! شما به صفحه اصلی دسترسی پیدا کردید.");
    } else {
        res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("صفحه مورد نظر یافت نشد.");
    }
});

// گوش دادن به پورت 3000
server.listen(3000, () => {
    console.log("سرور در حال اجرا است: http://localhost:3000");
});
