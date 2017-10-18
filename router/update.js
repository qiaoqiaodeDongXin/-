var publics = require("../publics");
var router = publics.router;
var Student = publics.Student;
var upname = null;
router.get("/update",function(req,res){
	upname = req.query.studentname;
	Student.find({studentname:req.query.studentname},function(err,data){
	    if (!err) {
	    	res.render("update",{data});
	    	// console.log(upname);
	    }else{
	    	console.log(err);
	    };
	});
});
// 我发现之前save只跳转,但从不render页面并且,data,这么写会导致显示模板错误
//增删查这三个顺序执行的有问题啊,如果find和save同等级,find总是要比save先执行那数据肯定是空啊,
router.post("/update",function(req,res){
	// console.log(upname);
	var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
	var tate = new Date();
	var time = tate.getFullYear() + "-" + (tate.getMonth()+1) + "-" + tate.getDate() + "T" + tate.getHours() + ":" + tate.getMinutes() + ":" + tate.getSeconds() + str.charAt(Math.floor(Math.random()*52));
	// console.log(time);
	req.body.time = time;
	var stu = new Student(req.body);
	Student.remove({studentname:upname},function(){
	    console.log(upname+"123555");
	});
	stu.save(function(err,data){
		console.log(data + "1");
		if(!err){
		    console.log(data +"2");  
	    Student.find({studentname:req.body.studentname},function(err,data){      
	                	if (!err) {
	                		res.render("index",{data});
	                		console.log({data});
	                	}else{
	                		console.log(err);
	                	};
	    });
		}else{
			console.log(err);
		}
	});
});

module.exports = router;