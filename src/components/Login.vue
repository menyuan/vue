<template>
  <div class="hello">
     <div class="container">
     	<div class="row">
     		<div class="col-md-1"></div>
     		<div class="col-md-10">
     			<form class="form-horizontal" role="form">
				  <div class="form-group">
				    <label for="name" class="col-sm-2 control-label">姓名</label>
				    <div class="col-sm-10">
				      <input type="text" v-model="username" class="form-control" id="name" placeholder="请输入姓名">
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="password" class="col-sm-2 control-label">密码</label>
				    <div class="col-sm-10">
				      <input type="password" v-model="password" class="form-control" id="password" placeholder="请输入密码">
				    </div>
				  </div>

				  <div class="form-group">
				    <div class="col-sm-offset-2 col-sm-10">
				      <button type="submit" class="btn btn-default" @click="login">登陆</button>
				    </div>
				  </div>
				</form>
     		</div>
     		<div class="col-md-1"></div>
     	</div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data(){
  	return {
  		username:'',
  		password:'',
  	}
  },
  methods:{
  	login(){
  		var _self=this;
  		var flag=0;
  		$.ajax({
  			type:'POST',
		    url:'/api/user',
		    dataType:'json',
		    success:function(res){
		        for(var item of res.user){
		        	if(_self.username==item.username && _self.password==item.password){
		        		flag=1;
		        		break;
		        	}
		        }
		        if(!flag){
		        	alert("用户名或密码错误");
		        }else{
		        	_self.$emit('userSignIn',_self.username);
		        	_self.$router.replace({
		        		path:'/'
		        	})		        
		        }
		    }
  		})
  	}
  }
}
</script>
