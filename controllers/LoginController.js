const Login = require("../models/Login");
const jwt = require("jsonwebtoken")
exports.handleSignInAttempt = (req, res) => {

  console.log("SIGN IN ATTEMPT FROM :", req.body.username)

  Login.findOne({ username: req.body.username, password: req.body.password }, (err, account) => {
    console.log("hahah data" + account)
    if (err) {
      console.log("Error in Server " + account)
      res.status(500).send({ 'signInStatus': 'failure', 'err': err });
    }
    if (account != null || account != undefined) {
      console.log("Account found")

      jwt.sign({ user: req.body }, 'secretkey', { expiresIn: '60s' }, (err, token) => {
        const userDetail = { userId: account._id, token: token }
        
     //   localStorage.setItem('user-token',token);
        res.status(200).send({ 'signInStatus': 'authorized', 'userDetail': userDetail, 'err': err });
      })

    }
    else {
      console.log("Account not found")
      res.status(200).send({ 'signInStatus': 'not_authorized', 'err': err });
    }
  });


}

exports.getAllAccounts = (req, res) => {

  console.log("Get all accounts ")
  Login.find({}, (err, accounts) => {
    if (err) {
      console.log("ERROR in database............");
      res.status(500).send(err);
    }
    res.status(200).json(accounts);
  });


}
