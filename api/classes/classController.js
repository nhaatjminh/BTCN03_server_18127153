const classService = require('./classService');

exports.list = function(req, res) {
    classService.list((result) => {
        if (result){
            res.status(200).json(result);
        } else {
            res.status(404).json({message: 'No class available'});
        }
    });
}

exports.detail = function(req, res, next) {
    const id = req.params.id;
    classService.detail(parseInt(id), result => {
        if (result){
            res.status(200).json(result);
        } else {
            res.status(404).json({message: 'Class not found'});
        }
    });
    
};

exports.create = (req, res) => {
    const classObj = {
        name: req.body.name,
    }
    classService.create(classObj, result => {
        if (result){
            res.status(200).json({message: 'Class create', id: result});
        } else {
            res.status(404).json({message: 'Error'});
        }
    });
}