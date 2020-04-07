const QuizController = require("../models/quizModel");

exports.postQuestion = (req, res) => {

	let quiz = new QuizController(req.body);
    console.log("adding .....");
    quiz.save((err,data)=>{
      if(err) {
        console.log("here",err);
        res.status(500).json({'quizStatus':'Failure','err':err});
      }
      else {
        console.log("***",data);
        res.status(200).json({'quizStatus':'createdquiz','data':data});
      }
    })
};


exports.getQuestion  = (req, res) => {
  console.log("getting one");
  query ={courseId:req.params.courseId};
  QuizController.find(query)
  .then(todos => {
        console.log(todos);
        res.status(200).json({'itemStatus':'created','quizlist':todos});
    }).catch(err => {
      console.log('sanan')
        res.status(500).json({'itemStatus':'Failure','err':err});
    });
};

