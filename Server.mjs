import express, { json } from "express"

const App = express();
const Port = 4000;
App.use(json())

let Users = []

App.post('/User',(req, res)=>{
    console.log(req.body);
    Users.push(req.body);
    res.send("user is created on working")
})

App.get('/User',(req, res)=>{
    res.send(Users)
})
App.put('/User',(req, res)=>{
    res.send("your user modify ")
})


App.delete('/User',(req, res)=>{
    res.send("your user modify ") 
})

App.get('/',(req, res)=>{
    res.send("your server is working ")
})


const port = process.env.Port || 4000

App.listen(port,()=>{
    console.log(`Localhost  ${Port}`)
})