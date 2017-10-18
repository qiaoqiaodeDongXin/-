var publics = require("./publics");
var app = publics.app;

app.use(require("./router/addStudent"));
app.use(require("./router/sousuo"));
app.use(require("./router/remove"));
app.use(require("./router/update"));
app.use(require("./router/page"));

// 端口
app.listen(3000,function(){
	console.log("服务器已启动……");
});
