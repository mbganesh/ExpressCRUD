var mongoose = require('mongoose')

var StaffSchema = mongoose.Schema({
    staffId:String,
    name:String,
    position:String,
    age:String,
    number:String
})

var StaffModel = mongoose.model("staff_list" , StaffSchema)

module.exports = StaffModel;