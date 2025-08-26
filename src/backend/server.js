import express from 'express';
import Razorpay from 'razorpay'
import dotenv from 'dotenv';
import cors from 'cors'
import crypto from 'crypto';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors())

app.post("/order",async(req,res) =>{
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret : process.env.RAZORPAY_SECRET
    });
  
    const options = req.body;
    const order = await razorpay.orders.create(options);
  
    if(!order){
      return res.status(500).send("Error");
    }
  
    res.json(order);
  } catch (err) {
    res.status(500).send("Error");
  }


})

app.post("/order/validate", async(req,res)=>{
    const {razorpay_payment_id,   razorpay_order_id,  razorpay_signature} =  req.body;
    const sha = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET);
    sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const digest = sha.digest("hex");
    if(digest !== razorpay_signature){
      return res.status(400).json({msg: "Transaction is not legit!"});
    }
    res.json({
      msg: "success",
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id
    })
})


app.listen(3000, ()=>{
  console.log("listening on port", 3000)
})

// {
//   "razorpay_payment_id":,
//      "razorpay_order_id":,
//        "razorpay_signature":
// }