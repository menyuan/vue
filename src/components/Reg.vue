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
				    <label for="Apassword" class="col-sm-2 control-label">确认密码</label>
				    <div class="col-sm-10">
				      <input type="password" v-model="Apassword" class="form-control" id="password" placeholder="请输入确认密码">
				    </div>
				  </div>
				  <div class="form-group">
				    <div class="col-sm-offset-2 col-sm-10">
				      <button type="submit" class="btn btn-default" @click="onReg">注册</button>
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
  name: 'Reg',
  data () {
    return {
      msg: 'biaodan',
      username: 'menyuan',
      password: '123',
      Apassword: '123'
    }
  },
  methods: {
    onReg () {
    }
  }
}
</script>