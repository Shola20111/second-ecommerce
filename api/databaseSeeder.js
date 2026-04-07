const router = require('express').Router()
const User = require('./models/user')
const users = require('./data/users')
const Product = require('./models/Product')
const products = require('./data/products')



router.get('/users', async(req, res)=>{
  await User.deleteMany({})
  const UserSeeder = await User.insertMany(users)
  res.send({UserSeeder})
})


router.get('/products', async(req, res)=>{
  await Product.deleteMany({})
  const ProductSeeder = await Product.insertMany(products)
  res.send({ProductSeeder})
})



module.exports = router