const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json())

app.get('/',(req,res) => {
    res.send('Look Mama! I can code Node Now!! ya houuuu')
});

const users = [
    {id:1, name:'Tanaka', email:'Tanaka@mail.com', phone:'01777777777'},
    {id:2, name:'takahashi', email:'takahashi@mail.com', phone:'01777777777'},
    {id:3, name:'tamaki', email:'tamaki@mail.com', phone:'01777777777'},
    {id:4, name:'nakajima', email:'nakajima@mail.com', phone:'01777777777'},
    {id:5, name:'arimoto', email:'arimoto@mail.com', phone:'01777777777'},
    {id:6, name:'wajima', email:'wajima@mail.com', phone:'01777777777'},
    {id:7, name:'wasabi', email:'wasabi@mail.com', phone:'01777777777'}
]

app.get('/users',(req,res) =>{
    // filter by search query parameter
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }else{
        res.send(users);
    }

    
});
;

app.get('/user/:id',(req,res) => {
    console.log(req.params);
    const id = req.params.id;
    const user = users.find( u => u.id == id);
    res.send(user);
});

app.get('/fruits',(req,res) =>{
    res.send(['mango','apple', 'oranges'])
});

app.post('/user',(req,res) =>{
    console.log('request',req.body);
    const user = req.body;
    user.id =users.length + 1;
    users.push(user)

    res.send(user)
})

app.get('/fruits/mango/fazle',(req,res) =>{
    res.send('sour soud fazle flavor')
});

app.listen(port,() => {
    console.log('Listening to port', port);
})