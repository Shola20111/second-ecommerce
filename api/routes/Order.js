const express = require('express');
const AsynHandler = require('express-async-handler');
const Order = require('../models/Order');
const protect = require('../middleware/Auth');
const orderRouter = express.Router();

orderRouter.post("/", protect, AsynHandler( async(req, res) => {
  const { orderItems, shippingAddress, paymentMethod, taxPrice, shippingPrice, totalPrice } = req.body;

  if(orderItems && orderItems.length === 0){
    res.status(400);
    throw new Error("No Order Items Found!")
  }else{
    const order = new Order({
      user: req.user._id,
      orderItems,
      shippingAddress,
      paymentMethod,
      taxPrice,
      shippingPrice,
      totalPrice
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  }

}));


//ORDER PAYMENT ROUTE
orderRouter.put('/:id/payment', protect, AsynHandler( async(req, res) => {
  const order = await Order.findById(req.params.id);

  if(order){
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      updated_time: req.body.updated_time,
      email_address: req.body.email_address
    }

    const updatedOrder = await order.save();
    res.json(updatedOrder);

}else{
   res.status(404);
   throw new Error("Order not found!");
}
}))

orderRouter.get("/", protect, AsynHandler( async(req, res) => {
  const orders = await Order.find({user: req.user._id}).sort({_id:-1});
  if(orders){
      res.status(200).json(orders);
  }else{
      res.status(404);
      throw new Error("No Orders Found!");
  }
  
}));

orderRouter.get("/:id", protect, AsynHandler( async(req, res) => {
  const order = await Order.findById(req.params.id).populate("user", "email");

  if(order){
      res.status(200).json(order);
  }else{
      res.status(404);
      throw new Error("Order not found!");
  }
}));

orderRouter.delete("/:id", protect, AsynHandler( async(req, res) => {
  const order = await Order.findByIdAndDelete(req.params.id);

  if(order){
      res.json({message: "Order Deleted!"});
  }else{
      res.status(404);
      throw new Error("Order not found!");
  }
}))



module.exports = orderRouter;