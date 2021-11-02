const classesDB = require('./classModel');

exports.list = (callback)  => {
    classesDB.getAll().then((results) => {
        callback(results);
    }).catch(e => {});
}
exports.detail = (id, callback) => {
    classesDB.getAll().then((results) => {
        callback(results.find(c => c.id === id));
    }).catch(e => {});
}
exports.create = (classObj) => {
    classObj.id = classes.length + 1;
    classesDB.create(classObj).then((results) => {
        callback(results);
    }).catch(e => {});
}