const express = require('express');
const mongoose = require('mongoose')
const app = express();
const connectDB = async ()=>{
    mongoose.connect('mongodb://localhost:27017/e-comm');
    const productSchema = new mongoose.Schema({});
    const prouct = mongoose.model('product', productSchema);
    const data = await prouct.find();
    console.log(data);
}
connectDB();
app.listen(7000);