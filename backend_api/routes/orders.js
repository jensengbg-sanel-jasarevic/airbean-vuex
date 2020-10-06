// Router
const { Router } = require('express');
const router = new Router();

// Database
const { db } = require('./../db')

// Routes
router.post('/', (req, res) => {

    console.log('Order received')

    // Construct order 
    let order = {
        orderNr: 123456789,
        eta: '10'  
    }

      // Add order to db
      db.get('orders')
      .push(order)
      .write()

      console.log(`Order ${order.orderNr} stored in db.`)

        res.send({ msg: 'Thanks', orderNr: order.orderNr, eta: order.eta }); 
});

module.exports = router