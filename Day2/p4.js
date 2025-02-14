const http=require("http");
const User=[
    {id:1,name:"nish",age:25},
    {id:2,name:"amy",age:28},
    {id:3,name:"sheldon",age:30},


]

const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"application/json"});
    const name=User.map((user)=>{
        return user.name;
    })
    res.end(JSON.stringify(User));
})

server.listen(9001,()=>{
    console.log('server is running at http://localhost:9001/');
});