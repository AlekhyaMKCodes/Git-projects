const express = require('express');
const router = express.Router();

// GET route for /admin/add-product
router.get('/add-product', (req, res, next) => {
    res.send(`
        <form action="/admin/add-product" method="POST">
            <input type="text" name="productName" placeholder="Product Name">
            <input type="submit" value="Add Product">
        </form>
    `);
});

// POST route for /admin/add-product
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;
