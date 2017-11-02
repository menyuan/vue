const Mock=require('mockjs');

var template={
	'data|1-6':[{
		'title':'@ctitle',
		'image':'@image',
		'article':'@cparagraph'
	}]
}
var template1={
	/*'user|1-5':[{
		'username':'@cname',
		'password':'/[a-z][A-Z][0-9]/'
	}]*/
	"user":[
		{
			"username":"admin",
			"password":"123"
		},
		{
			"username":"menyuan",
			"password":"1212"
		}
	]
}
Mock.mock('/api/data',template);
Mock.mock('/api/user',template1);