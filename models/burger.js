//Import the ORM to create functions that interact with the database
const orm = require("../config/orm");




var burger ={

    all: function(cb) {
        orm.all("burgers", function(res){
            cb(res);
        });
    },







}







module.exports = burger;