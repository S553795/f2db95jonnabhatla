var Engine = require('../models/engine');

exports.engine_view_all_Page = async function (req, res) {
    try {
        theEngines = await Engine.find();
        res.render('engines', { title: 'Engine Search Results', results: theEngines });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// List of all Engines 

exports.engine_list = async function (req, res) {
    try {
        theEngines = await Engine.find();
        res.send(theEngines);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific Engine. 
exports.engine_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Engine.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle Engine create on POST. 
exports.engine_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Engine();
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"EngineType":"goat", "FuelType":12, "Cylinders":"large"} 
    document.EngineType = req.body.EngineType;
    document.FuelType = req.body.FuelType;
    document.Transmission = req.body.Transmission;
    document.Cylinders = req.body.Cylinders;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


// Handle Engine delete form on DELETE. 
exports.engine_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Engine delete DELETE ' + req.params.id);
};

// Handle Engine update form on PUT. 
exports.engine_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
   ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Engine.findById(req.params.id)
        // Do updates of properties
        if (req.body.EngineType)
            toUpdate.EngineType = req.body.EngineType;
        if (req.body.FuelType) toUpdate.FuelType = req.body.FuelType;
        if (req.body.Transmission) toUpdate.Transmission = req.body.Transmission;
        if (req.body.Cylinders) toUpdate.Cylinders = req.body.Cylinders;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
   failed`);
    }
}
