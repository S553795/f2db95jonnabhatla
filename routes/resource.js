var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var engine_controller = require('../controllers/engine'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Engine.  
router.post('/engines', engine_controller.engine_create_post); 
 
// DELETE request to delete Engine. 
router.delete('/engines/:id', engine_controller.engine_delete); 
 
// PUT request to update Engine. 
router.put('/engines/:id', engine_controller.engine_update_put); 
 
// GET request for one Engine. 
router.get('/engines/:id', engine_controller.engine_detail); 
 
// GET request for list of all Engine items. 
router.get('/engines', engine_controller.engine_list); 
 
module.exports = router; 