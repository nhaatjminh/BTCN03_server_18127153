const sql = require('../../db/db');

const Class = (c) => {
    this.id = c.id;
    this.name = c.name;
};

Class.getAll = () => {
    return new Promise((resolve, reject) => {
        sql.query('SELECT * FROM class_db.classes',  (err, res) => {
            if (err) {
                reject(err);
            }
            resolve(res);
        })
    });
    
}

Class.create = (newClass) => {
    return new Promise((resolve, reject) => {
        sql.query("INSERT INTO class_db.classes SET ?", newClass, (err, res) => {
            if (err) {
              console.log("error: ", err);
              reject(err);
            }
        
        console.log("created customer: ", { id: res.insertId, ...newClass });
        resolve(res);
        })
    });
    

}

module.exports = Class;