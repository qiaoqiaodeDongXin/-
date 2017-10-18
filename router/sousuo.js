var publics = require("../publics");
var router = publics.router;
var Student = publics.Student;

// 搜索
router.post("/sousuo",function(req,res){
	// console.log(req.body.studentname);   //req.body.studentname可能存在也可能不存在,但不是""
	// if(!req.body.studentname){
	// 	console.log(123);
	// }
	// if(req.body.studentname){
	// 	console.log(1);
 //        Student.find({studentname:req.body.studentname},function(err,data){
	//     	if (!err) {
	//     		res.render("index",{data});
	//     	}else{
	//     		console.log(err);
	//     	};
	//     	if(data == []){
	//     		console.log(123);
	//     	};
	//     });
	// };
	// if(req.body.telephone){
	// 	console.log(3);
	// 	console.log(req.body.telephone);
 //        Student.find({telephone:req.body.telephone},function(err,data){
	//     	if (!err) {
	//     		res.render("index",{data});
	//     	}else{
	//     		console.log(err);
	//     	};
	//     	if(data != []){
	//     		return;
	//     	};
	//     });
	// };
	// if(req.body.gender){           // req.body.gender肯定存在因为index.html给不限设置了checked
	// 	console.log(2);
 //        Student.find({gender:req.body.gender},function(err,data){
	//     	if (!err) {
	//     		res.render("index",{data});
	//     	}else{
	//     		console.log(err);
	//     	};
	//     	if(data != []){
	//     		return;
	//     	};
	//     });
	// };
	// name存在,可以再看看phone存在不存在,但不看性别,名字不存在,要看phone存在不存在,如果phone不存在,那么性别或者不限就可以出来了
	if(req.body.studentname){
		if(req.body.telephone){
			// console.log(req.body.gender);     // 不限是on
	        // if(req.body.gender == on){
                Student.find({$or:[{studentname:req.body.studentname},{telephone:req.body.telephone}]},function(err,data){
	            	if (!err) {
	            		res.render("index",{data});
	            	}else{
	            		console.log(err);
	            	};
	            });
	       // };// 这里没有写else因为如果性别不是不限,那么or查询肯定会出现非常多的数据,上面name和phone用or查询最多俩
		}else{
            Student.find({studentname:req.body.studentname},function(err,data){
	    	    if (!err) {
	    	    	res.render("index",{data});
	    	    }else{
	    	    	console.log(err);
	    	    };
	        });
		}
	}else{
		if(req.body.telephone){
                Student.find({telephone:req.body.telephone},function(err,data){
	            	if (!err) {
	            		res.render("index",{data});
	            	}else{
	            		console.log(err);
	            	};
	            });
		}else{
			if(req.body.gender == "on"){
                Student.find({},function(err,data){
	    	        if (!err) {
	    	        	res.render("index",{data});
	    	        }else{
	    	        	console.log(err);
	    	        };
	            });
			}else{
				Student.find({gender:req.body.gender},function(err,data){
	    	        if (!err) {
	    	        	res.render("index",{data});
	    	        }else{
	    	        	console.log(err);
	    	        };
	            });
			};
		};
	};
});

module.exports = router;