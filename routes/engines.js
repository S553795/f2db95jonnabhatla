var express = require('express'); 
const engine_controlers= require('../controllers/engine'); 
var router = express.Router(); 
 
/* GET engines */ 
router.get('/', engine_controlers.engine_view_all_Page ); 
module.exports = router; 