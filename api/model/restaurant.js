const mongoose=require("mongoose")
const GenericSchema = new mongoose.Schema({}, { strict: false });
const Restaurant = mongoose.model('Restaurant', GenericSchema, 'zomatoSampleData');
module.exports=Restaurant