var publics = require("../publics");
var router = publics.router;
var Student = publics.Student;

router.get("/index",function(req,res){
	Student.find({},function(err,data){
		if (!err) {
			// console.log(data);
			res.render("index",{data});
		}else{
            console.log(err);
		}
	}).limit(3);
	indexPage = -1;
});
router.get("/one",function(req,res){
	Student.find({},function(err,data){
		if (!err) {
			// console.log(data);
			res.render("index",{data});
		}else{
            console.log(err);
		}
	}).limit(3);
	indexPage = -1;
});
router.get("/two",function(req,res){
	Student.find({},function(err,data){
		if (!err) {
			// console.log(data);
			res.render("index",{data});
		}else{
            console.log(err);
		}
	}).skip(3).limit(3); 
	indexPage = 1;
});
router.get("/three",function(req,res){
	Student.find({},function(err,data){
		if (!err) {
			// console.log(data);
			res.render("index",{data});
		}else{
            console.log(err);
		}
	}).skip(6).limit(3);
	indexPage = 2;
});
router.get("/four",function(req,res){
	Student.find({},function(err,data){
		if (!err) {
			// console.log(data);
			res.render("index",{data});
		}else{
            console.log(err);
		}
	}).skip(9).limit(3);
	indexPage = 3;
});
router.get("/five",function(req,res){
	Student.find({},function(err,data){
		if (!err) {
			// console.log(data);
			res.render("index",{data});
		}else{
            console.log(err);
		}
	}).skip(12).limit(3);
	indexPage = 4;
});
router.get("/six",function(req,res){
	Student.find({},function(err,data){
		if (!err) {
			// console.log(data);
			res.render("index",{data});
		}else{
            console.log(err);
		}
	}).skip(15).limit(3);
	indexPage = 6;
});
var indexPage = 0;
router.get("/prev",function(req,res){
	if(indexPage == -1){
		indexPage = 5;
	}
	Student.find({},function(err,data){
		if (!err) {
			// console.log(data);
			res.render("index",{data});
		}else{
            console.log(err);
		}
	}).skip(indexPage*3).limit(3);
	indexPage--;
});
router.get("/next",function(req,res){
	if(indexPage == 6){
	    indexPage = 0;
	}
	Student.find({},function(err,data){
		if (!err) {
			// console.log(data);
			res.render("index",{data});
		}else{
            console.log(err);
		}
	}).skip(indexPage*3).limit(3);
	indexPage++;
});
// 添加学生信息的页面
router.get("/addStudent",function(req,res){
	res.render("addStudent");        //render加"/"绝对错
});
// 导出处理页面路由
module.exports = router;