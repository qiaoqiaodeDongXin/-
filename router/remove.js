var publics = require("../publics");
var router = publics.router;
var Student = publics.Student;

router.get("/remove",function(req,res){
	Student.remove({studentname:req.query.studentname},function(){
		console.log(123);
	    Student.find({},function(err,data){ //如果不放到删除的回调函数,感觉删除和查找是同时进行,甚至先查找的,所以查找能找到被删除的脏数据
	        if (!err) {
	        	res.render("index",{data});
	        }else{
	        	console.log(err);
	        };
	    });
	});
});

module.exports = router;