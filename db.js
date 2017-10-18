var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Student");
var db = mongoose.connection;
db.on("open",function(){
	console.log("数据库打开成功");
});
var Schema = mongoose.Schema;

// 班级数据集合
var classSchema = new Schema({
	subject: String,
	session: Number,
	classroom: String,
	teacher: String
});
var Class = mongoose.model("Class",classSchema);

// 学生数据集合
// {versionKey:false}：去掉版本号（__v:0）
var studentSchema = new Schema({
	studentname: String,
	age: Number,
	gender: String,
	telephone:String,
	email: String,
	remarks: String,
	time: String
	// classInfo: {type:Schema.Types.ObjectId,ref:"Class"}
},{versionKey:false});
var Student = mongoose.model("Student",studentSchema);

module.exports = {
	Class,
	Student
}










