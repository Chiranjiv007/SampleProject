const express = require('express')
const app = express()
const port = 2000

app.get('/images/:image',(req,res) => {
    console.log(__dirname +"/shapes/"+ req.params.image)
    res.sendfile(__dirname +"/shapes/"+ req.params.image)
})


app.get('/restaurants', (req,res) => {
    res.json([
        { "name" : "React Cafe", "address" : "123 Anywhere", "image" : "restaurantIcon.png", "rating" : 3.5},
        { "name" : "Fancy Cafe", "address" : "124 Anywhere", "image" : "restaurantIcon.png", "rating" : 3.5},
        { "name" : "Aranya's Cafe", "address" : "125 Anywhere", "image" : "restaurantIcon.png", "rating" : 5},
        { "name" : "Aranya's Cafe", "address" : "125 Anywhere", "image" : "restaurantIcon.png", "rating" : 5},
        { "name" : "Aranya's Cafe", "address" : "125 Anywhere", "image" : "restaurantIcon.png", "rating" : 5},
        { "name" : "Aranya's Cafe", "address" : "125 Anywhere", "image" : "restaurantIcon.png", "rating" : 5},
        { "name" : "Aranya's Cafe", "address" : "125 Anywhere", "image" : "restaurantIcon.png", "rating" : 5},
        { "name" : "Aranya's Cafe", "address" : "125 Anywhere", "image" : "restaurantIcon.png", "rating" : 5},
        { "name" : "Aranya's Cafe", "address" : "125 Anywhere", "image" : "restaurantIcon.png", "rating" : 5},
        { "name" : "Aranya's Cafe", "address" : "125 Anywhere", "image" : "restaurantIcon.png", "rating" : 5},
        { "name" : "Aranya's Cafe", "address" : "125 Anywhere", "image" : "restaurantIcon.png", "rating" : 5},
        { "name" : "Aranya's Cafe", "address" : "125 Anywhere", "image" : "restaurantIcon.png", "rating" : 5},
        { "name" : "Aranya's Cafe", "address" : "125 Anywhere", "image" : "restaurantIcon.png", "rating" : 5},
        { "name" : "Aranya's Cafe", "address" : "125 Anywhere", "image" : "restaurantIcon.png", "rating" : 5},
        { "name" : "Aranya's Cafe", "address" : "125 Anywhere", "image" : "restaurantIcon.png", "rating" : 5},
        { "name" : "Aranya's Cafe", "address" : "125 Anywhere", "image" : "restaurantIcon.png", "rating" : 5},
        { "name" : "Aranya's Cafe", "address" : "125 Anywhere", "image" : "restaurantIcon.png", "rating" : 5},
        { "name" : "Aranya's Cafe", "address" : "125 Anywhere", "image" : "restaurantIcon.png", "rating" : 5},
        { "name" : "Aranya's Cafe", "address" : "125 Anywhere", "image" : "restaurantIcon.png", "rating" : 5},
        { "name" : "Aranya's Cafe", "address" : "125 Anywhere", "image" : "restaurantIcon.png", "rating" : 5}
    ])
})



app.post('/review', (req,res) => {
    setTimeout(() => {
        res.json({ success: "Ok"})
    }, 3000)
})

app.listen(port,()=>console.log('Restaurant app listing port '+port));