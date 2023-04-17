/**
 * Ödev 6

Koa.js ile web sunucumuzu yazalım.
Öncelikle şunu belirteyim. Koa.js hakkında konuşmadığımızı biliyorum ve bu ödev ilk aşamada bizi zorlayacak. Buradaki amacım yeni bir teknolojiye başlama cesareti oluşturmak ve hata yapma özgürlüğümüz olduğunu göstermek.

koa paketini indirelim.
index, hakkimda ve iletisim sayfaları oluşturalım.
Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h1 başlıkları yazdıralım.
port numarası olarak 3000'i kullanalım.
 */


const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
    
    const path = ctx.path;
    switch (path) {
        case "/":
            ctx.type = "text/html";
            ctx.statusCode = 200;
            ctx.body = "<h1>Index Sayfasina Hos Geldiniz</h1>";
            break;
        case "/about":
            ctx.type = "text/html";
            ctx.statusCode = 200;
            ctx.body = "<h1>Hakkimda Sayfasina Hos Geldiniz</h1>";
            break;
        case "/contact":
            ctx.type = "text/html";
            ctx.statusCode = 200;
            ctx.body = "<h1>İletisim Sayfasina Hos Geldiniz</h1>";
            break;
        default:
            ctx.type = "text/html";
            ctx.statusCode = 404;
            ctx.body = "<h1>404 Not Found</h1>";
            break;
          
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server ${port} portunda başlatıldı.`);
})