var express = require('express'); 
const engine_controlers= require('../controllers/engine'); 
var router = express.Router(); 
 
/* GET engines */ 
router.get('/', engine_controlers.engine_view_all_Page ); 
router.get('/engines/:id', engine_controlers.engine_detail);
router.get('/detail', engine_controlers.engine_view_one_Page);
router.get('/create', engine_controlers.engine_create_Page);
router.get('/update', engine_controlers.engine_update_Page);
router.get('/delete', engine_controlers.engine_delete_Page);
module.exports = router;