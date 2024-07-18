import express from 'express'

const app=express()
app.get('/',(req,res)=>{
    res.send("heelo from my-app1")

})

app.listen(8081);