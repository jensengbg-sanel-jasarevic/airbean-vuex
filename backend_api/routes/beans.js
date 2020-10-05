// Router
const { Router } = require('express');
const router = new Router();

const { db } = require('./../db')

// Routes
router.get('/', (req, res) => {

    let menu = db.get('menu').value()
    console.log(menu)
    
    res.send({ menu: menu })
})

module.exports = router