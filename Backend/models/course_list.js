const mongoose = require("mongoose");
// const { schema } = require("./student");
const Schema = mongoose.Schema;

const CourselistingSchema =new Schema({
    course :{type:String},
    category:{type:String}
})
const Course = mongoose.model("Course",CourselistingSchema);
module.exports = Course;