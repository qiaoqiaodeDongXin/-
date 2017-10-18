var express = require("express");
var app = express();
var router = express.Router();
var bodyParser = require("body-parser");
var template = require("art-template");

var db = require("./db");
var Student = db.Student;

app.use(express.static("views"));

// 解析 post 数据
app.use(bodyParser.urlencoded({extended:false}));

// 配置模板
app.engine('.html', template.__express);
app.set('view engine', 'html');
template.config('cache', false); 

module.exports = {
	express,
	router,
	db,
	Student,
	app
};



