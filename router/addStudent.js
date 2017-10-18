var publics = require("../publics");
var router = publics.router;
var Student = publics.Student;
// 上传 新的学生的信息 
router.post("/addStudent",function(req,res){
	var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
	var tate = new Date();
	var time = tate.getFullYear() + "-" + (tate.getMonth()+1) + "-" + tate.getDate() + "T" + tate.getHours() + ":" + tate.getMinutes() + ":" + tate.getSeconds() + str.charAt(Math.floor(Math.random()*52));
	// console.log(time);
	req.body.time = time;
	var stu = new Student(req.body);
	stu.save(function(err,data){
		// console.log(data);
		if(!err){
			res.redirect("/index");       // 加不加"/"都可以
		}
	});
});

module.exports = router;