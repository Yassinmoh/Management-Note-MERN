const express = require('express')
const notes=require('./data/notes')
const dotenv=require('dotenv')

dotenv.config()
const PORT=process.env.PORT || 5000;



const app = express()


app.get('/',(req, res) => {
    res.send('welcome in First API')
})

//Get All Notes:

app.get('/api/data',(req, res) => {
    res.send(notes)
})


//Get One Note:

app.get('/api/data/:id',(req, res)=>{
    const note=notes.find((item)=>item._id===req.params.id)
    res.send(note)
    })


app.listen(PORT,()=>{
    console.log(`App is listening in Port: ${PORT}`)
})