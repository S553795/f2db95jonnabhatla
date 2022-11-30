var express = require('express'); 
const engine_controlers= require('../controllers/engine'); 
var router = express.Router(); 
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }
/* GET engines */ 
router.get('/' ,engine_controlers.engine_view_all_Page ); 
router.get('/engines/:id', secured,engine_controlers.engine_detail);
router.get('/detail',secured, engine_controlers.engine_view_one_Page);
router.get('/create',secured, engine_controlers.engine_create_Page);
router.get('/update',secured, engine_controlers.engine_update_Page);
router.get('/delete',secured, engine_controlers.engine_delete_Page);
module.exports = router;