const express =require("express")
const app=express();
const cors=require("cors");
const PORT=7000;
const stripe=require("stripe")("sk_test_51PVWlbLPaJtoocZIVlHdC50gIKw9dq3ocTjb5BsdzAoBQUCVFWjnePujT1fnf02HNRHSQ7QDLndsP4mE2PLpiTaT00Sq2BKI10")


app.use(express.json());
app.use(cors());

app.use(cors(
    {
    origin: ["https://deploy-mern-1whq.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true
    }
    ));


app.get("/", (req, res) => {
    res.send("server");
  });

//checkout api
app.post("/api/create-checkout-session",async(req,res)=>{
const {products,amount}=req.body;
console.log(products)
console.log(amount)

const lineItems = products.map((product,amount) => ({
    
    price_data: {
    currency: "inr",
    product_data: {
    name: product.name
    },
    unit_amount:product.new_price* 100,
    // const {amount}=req.body;
    // unit_amount:amount,
    },
    quantity:1


}));

const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
});


    res.json({id:session.id})

})


app.listen(PORT,()=>{
    console.log("serverstarted" +PORT);
})





// const express = require("express");
// const app = express();
// const stripe = require("stripe")("sk_test_51PVWlbLPaJtoocZIVlHdC50gIKw9dq3ocTjb5BsdzAoBQUCVFWjnePujT1fnf02HNRHSQ7QDLndsP4mE2PLpiTaT00Sq2BKI10");

// app.use(express.json());

// // Checkout API
// app.post("/api/create-checkout-session", async (req, res) => {
//   const { products } = req.body;

//   const lineItems = products.map((product) => ({
//     price_data: {
//       currency: "inr",
//       product_data: {
//         name: product.name,
//       },
//       unit_amount: product.new_price * 100,
//     },
//     quantity: product.qnty,
//   }));

//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ["card"],
//     line_items: lineItems,
//     mode: "payment",
//     success_url: "http://localhost:3000/success",
//     cancel_url: "http://localhost:3000/cancel",
//   });

//   res.json({ id: session.id });
// });

// app.listen(7000, () => {
//   console.log("Server started");
// });
