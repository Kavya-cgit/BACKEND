const http=require('http');
const server = http.createServer((req,res) => {
    res.writeHead(200,{'content-type':'text/html'});
    res.end(`<h1 style="color:red ;">hello world</h1>`);
});
server.listen(9000, (err) =>{
    if(err)
        console.log(err);
    console.log("Server is running at http://localhost:9000/");
});