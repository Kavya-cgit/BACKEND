const http=require('http');
const server = http.createServer(async(req,res) => {
    const data=await fetch("https://dummyjson.com/products");
    const mydata=await data.json()
    const products=mydata.products;
    res.statusCode=200;
    res.setHeader('Content-type','application/json');
    const titles=products.map((element)=>{
        return element.id;
    })
    res.end(JSON.stringify(titles));
});

server.listen(9100, (err) =>{
    if(err) throw err;
    else
    console.log("Server is running on port http://localhost:9100/");
});