// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// router.post('/add', function(req,res){
// 	res.send("Hello ");
// });

// module.exports = router;

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/add', function(req,res){
  console.log(req.body)
	res.send("Hello "+ req.query.fname[0]);
});

module.exports = router;