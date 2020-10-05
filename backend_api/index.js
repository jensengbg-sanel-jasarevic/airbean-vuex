const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Routes
const beansRoute = require('./routes/beans');
const ordersRoute = require('./routes/orders');

// beans
app.use('/beans', beansRoute)

// orders
app.use('/orders', ordersRoute)


const PORT = 5000;

app.listen(PORT,() => {
    console.log('Server is running', PORT)
})