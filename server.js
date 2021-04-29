require('dotenv').config();
const express = require('express');

const connectDB = require('./config/db');


const authRouters = require('./routers/auth');

connectDB();




const app = express();

//middleware 

app.use(express.json());
app.use('/api', authRouters);



PORT = process.env.PORT || 5000;

// Routersssssssssss


app.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Hello from server side"
    })
})
app.post('/data', (req, res, next) => {
    res.status(200).json({
        message: req.body
    })
})


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})


