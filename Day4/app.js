const express =require('express');
const app = express();
app.use(express.json());
let users=[
    
        {id:1, name:'John Doe'},
        {id:2, name:'Jane Doe'},
        {id:3, name:'John Smith'}
    
]
app.get('/api/users', (req, res) => {
    res.json(users);
})
app.post('/users', (req, res) => {
    const user = req.body;
    const newid = users.length>0 ? users[users.length-1].id+1 : 1;
    user.id = newid;
    users.push(user);
     res.status(201).json({message: 'Data received successfully',user: user});
})
app.listen(9000, () => {
    console.log('Server is running on port http://localhost:9000/');
});