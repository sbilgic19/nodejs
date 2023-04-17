/**
Ödev 5

Kendi Web Sunucumuzu yazalım.
Kendi bilgisayarımızda aşağıdaki özellikleri kullanarak sunucumuzu yazalım.

createServer metodunu kullanacağız.
index, hakkimda ve iletisim sayfaları oluşturalım.
Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h2 başlıkları yazdıralım.
port numarası olarak 5000'i kullanalım.
Kolay gelsin.
 */

const http = require('http');

const server = http.createServer((req, res) => {

    const url = req.url;
    console.log(url);
    if(url === '/') {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h2>Index Sayfasina Hos Geldiniz</h2>");
    }else if (url === '/about') {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h2>Hakkimda Sayfasina Hos Geldiniz</h2>")
    } else if(url === '/contact') {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h2>Iletisim Sayfasina Hos Geldiniz</h2>");
    } else {
        res.writeHead(404, {"Content-Type": "text/html"});
        res.write("<h2>404 Aradiginiz Sayfa bulunamadi!<h2>");
    }

    res.end();
});


const port = 5001;
server.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı!`);
});




