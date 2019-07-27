const express=require('express')
const app=express()
const todosRoute=require('./route/todo')


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static(__dirname+'/public'))

app.use('/todoo',todosRoute)



app.listen(2000)

