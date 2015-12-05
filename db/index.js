var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://123.57.143.189/fdl');
mongoose.model('User',new mongoose.Schema({
    username:String,
    password:String
}));

global.Model = function(modName){
    return mongoose.model(modName);
}
