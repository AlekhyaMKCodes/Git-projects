// admin.js
exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
};

exports.postAddProduct = (req, res, next) => {
    const products = new Product(req.body.title);
    products.save();
    res.redirect('/');
};

// shop.js
exports.getProducts = (req, res, next) => {
    const products = product.fetchAll();
    res.render('shop', {
        pageTitle: 'Shop',
        prods: products,
        path: '/',
        hasProducts: products.length > 0,
        activeShop : true,
        productCSS: true
    });
};

