<template>
  <div class="hello">
     <div class="container">
     	<div class="row">
     		<div class="col-md-1"></div>
     		<div class="col-md-10">
     			<form class="form-horizontal" role="form">
				  <div class="form-group">
				    <label for="title" class="col-sm-2 control-label">标题</label>
				    <div class="col-sm-10">
				      <input type="text" v-model="title" class="form-control" id="title" placeholder="请输入标题">
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="description" class="col-sm-2 control-label">描述</label>
				    <div class="col-sm-10">
				      <input type="text" v-model="description" class="form-control" id="description" placeholder="请输入描述" required>
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="article" class="col-sm-2 control-label">内容</label>
				    <div class="col-sm-10">
				      <textarea cols="100" v-model="article" rows="10" placeholder="请输入内容" required></textarea>
				    </div>
				  </div>
				  <div class="form-group">
				    <div class="col-sm-offset-2 col-sm-10">
				      <button type="submit" class="btn btn-default" @click="onForm">提交</button>
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
  name: 'Form',
  data () {
    return {
      title: '',
      description: '',
      article: ''
    }
  },
  methods: {
    onForm () {
    	var _self=this;
    	$.ajax({
    		type:"POST",
    		url:'/api/data',
    		contentType:'application/json;charset=utf-8',
    		data:JSON.stringify({"title":_self.title,"article":_self.article}),
    		dataType:'json',
    		success:function(message){
    			if(message.status==200){
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