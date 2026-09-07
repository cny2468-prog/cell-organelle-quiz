const http=require('http'),fs=require('fs'),path=require('path');
const port=4199;
http.createServer((req,res)=>{const clean=decodeURIComponent(req.url.split('?')[0]);const file=path.join(__dirname,clean==='/'?'index.html':clean.replace(/^\//,''));fs.readFile(file,(e,data)=>{if(e){res.statusCode=404;return res.end('Not found')}const ext=path.extname(file);res.setHeader('Content-Type',ext==='.html'?'text/html; charset=utf-8':ext==='.png'?'image/png':'application/octet-stream');res.end(data)})}).listen(port,'127.0.0.1',()=>console.log(`quiz ready ${port}`));
