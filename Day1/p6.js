const fs= require('fs');
const data=" I AM appending to last";
fs.appendFile("./data.txt",data,(err)=>{
    if(err)
        throw err;
 
    console.log("Data appended to the file!");
});