const express = require("express");
const Payment = require("../model/payment");

const router = express.Router();

router.post("/", async (req, res) => {
  const { paymentID ,customerID ,noOfItems,price ,date , time } = req.body;

  console.log(req.body);



  const newPayment = new Payment({paymentID ,customerID ,noOfItems,price ,date , time});
  const savedPayment = await newPayment.save().catch((err) => {
    console.log("Error: ", err);
    res.status(500).json({ error: "Cannot register Payment at the moment!" });
  });

  if (savedPayment) res.json({ message: "Thanks for your Payement" });
});

module.exports = router;