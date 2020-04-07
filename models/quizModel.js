const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuizModel = new Schema({
  	courseId:{type: Schema.Types.ObjectId,ref:'CourseID'},
  	courseName:{type:String,default:''},
  	topic:{type:String,default:''},
  	question:{type:String,default:''},
  	istOption:{type:String,default:''},
  	secondOption:{type:String,default:''},
  	thirdOption:{type:String,default:''},
  	fourthOption:{type:String,default:''},
  	correctAnswer:{type:String,default:''}
  
});

 module.exports = mongoose.model("QuizModel", QuizModel);