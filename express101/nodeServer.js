const http = require('http');
const fs = require('fs');

console.log("server listening on port 3000");

const server = http.createServer((req, res)=>{
    
    if(req.url === '/'){
        res.writeHead(200,{'content-type':'text/html'});
        // res.write('<h1>This is the home page!</h1>');
        const homePageHTML = fs.readFileSync('node.html');
        res.write(homePageHTML);
        res.end();
    }else {
        res.writeHead(404,{'content-type':'text/html'});
        res.write('<h4>Sorry this page doesnt exist!</h4>');
        res.end();
    }

});

server.listen(3000);