
/* Project Name: COMP308 Assignment2
   Name: Kranthi kumar G J
   Student id: 300976059
   Date: 05-APR-2019 
   file name:index.js
   */

let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');


/* GET home page. */
//router.get('/', indexController.displayHomePage);

/* GET about page. */
//router.get('/about', indexController.displayAboutPage);

/* GET products page. */
//router.get('/products', indexController.displayProductsPage);

/* GET services page. */
//router.get('/services', indexController.displayServicesPage);

/* GET contact page. */
//router.get('/contact', indexController.displayContactPage);

/* GET - displays the Login Page */
//router.get('/login', indexController.displayLoginPage);

/* POST - processes the Login Page */
router.post('/login', indexController.processLoginPage);

/* GET - displays the User Registration Page */
//router.get('/register', indexController.displayRegisterPage);

/* POST - processes the User Registration Page */
router.post('/register', indexController.processRegisterPage);

/* GET - perform user logout */
router.get('/logout', indexController.performLogout);


module.exports = router;
