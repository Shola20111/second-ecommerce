const express = require('express')
const dotenv = require('dotenv')
const products = require('./data/products')
const mongoose = require('mongoose')
const app = express()

dotenv.config()


const PORT = process.env.PORT || 9000


mongoose.connect(process.env.mongooseDB).then(()=>console.log("DB connected!")).then((err)=>{err})

const databaseSeeder = require('./databaseSeeder')
const userRoute = require('./routes/User')
const productRoute = require('./routes/Product')
const orderRouter = require('./routes/Order')

app.use(express.json())

//database seeder routes
app.use('/api/seed', databaseSeeder)


//routes for users
app.use('/api/users', userRoute)


//routes for products
app.use('/api/products', productRoute)

//routes for orders
app.use('/api/orders', orderRouter)


app.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}...`)
})




// app.get('/api/products', (req, res)=>{
//   res.json(products)
// })

// app.get('/api/products/:id', (req, res)=>{
//   const product = products.find((product)=>product.id=req.params.id)
//   res.json(product)
// })