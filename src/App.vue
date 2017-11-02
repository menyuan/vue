<template>
  <div id="app"> 
    
    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
        <div class="container-fluid">
          <div class="navbar-header">
              <a class="navbar-brand" href="#">留言板</a>
          </div>
          <div>
              <ul class="nav navbar-nav navbar-right">
                 <li v-bind:class="{active:isActive}"><router-link to='/'>首页</router-link></li>
                 <li><router-link to='/form'>留言板</router-link></li>
                 <li><router-link to='/login'>登陆</router-link></li>
                 <li><router-link to='/reg'>注册</router-link></li>
              </ul>
          </div>
        </div>
    </nav>
    <router-view class="show"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      isActive: true
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav{
  padding:0 160px 0 200px;;
}
.show{
  margin-top:50px;
  padding-top:30px;
}
</style>
