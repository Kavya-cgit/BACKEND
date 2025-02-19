const http=require('http');
const fs=require('fs/promises');

const server=http.createServer(async(req,res) =>{
    const data=await fs.readFile('./data.json');
    const mydata=JSON.parse(data);
    res.statusCode=200;
    res.statusMessage="Success";
    res.setHeader('Content-Type','application/json');
    const names=mydata.map((element)=>{
        return element.name;
    })
    console.log(JSON.stringify(names));
    res.end(JSON.stringify(names));
})

server.listen(9000,(err)=>{
    if(err)
        console.log("err:"+err);
    console.log('server is running at http://localhost:9000/');
})