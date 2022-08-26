import express, { json } from "express"

const App = express();

App.use(json())
const port = process.env.Port || 3000;

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




App.listen(port,()=>{
    console.log(`Localhost  ${port}`)
})