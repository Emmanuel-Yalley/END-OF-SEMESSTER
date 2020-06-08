const mongoose = require ('mongoose')

const WebAPIsSchema = new mongoose.Schema({
   name: {
       type: String,
       required: true
}, 
customerToMaterial: {
    type: String,
    required: true
},
customerToDate: {
    type: Date,
    required: true,
    default: Date.now
}
})

module.exports = mongoose.model('WebAPIs', WebAPIsSchema)