const http =require('http');
const server=http.createServer((req,res)=>{
    if(req.url == "/home"){
        res.end("Welcome to Home Page");
    }
    else if(req.url =="/about"){
        res.end("Welcome to About Page");
    }
    else if(req.url =="/contact"){
        res.end("Welcome to Contact Page");
    }
    else{
        res.writeHead(404);
        res.end("Page Not Found");
    }

})
server.listen(6200, () =>{
    console.log("Server is running on port http://localhost:6200/");
});
