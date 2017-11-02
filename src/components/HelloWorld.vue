<template>
  <div class="hello">
     <div class="container">
        <div class="row">
          <div class="col-md-1"></div>
          <div class="col-md-10">
            <ul class="list-group">
              <li class="list-group-item">
                <div v-for="item in data" class="panel panel-default">
                  <div class="panel-body">
                    <h3>{{item.title}}</h3>
                    <div class="content">
                      <img v-bind:src="item.image">
                      <div class="article_content">
                        <p>{{item.article}}</p>
                        <a href="#">查看全文</a>
                      </div>
                    </div>
                  </div>
                </div>
                
              </li>
            </ul>
          </div>
          <div class="col-md-1"></div>
        </div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      data: ''
    }
  },
  mounted:function(){
    var _self=this;
    $.ajax({
      type:'POST',
      url:'/api/data',
      dataType:'json',
      success:function(res){
        _self.data=res.data;
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .panel{
 text-align:left;
 }
 .panel h3{
  margin:0;
  border-bottom:1px solid #ccc;
  padding:5px 0;
  margin-bottom:10px;
 }
 .panel img{
  width:120px;
  height:120px;
   
  float:left;
  padding:10px 20px 10px 0;
 }
 .panel .article_content{
   padding:10px 0 10px 0; 
 }
 .panel p{
  line-height:25px;
  font-size:15px;
 }
 .panel a{
  display:inline-block;
  width:80px;
  height:30px;
  background-color:orange;
  text-align:center;
  line-height:30px;
  color:#fff;
  margin-left:505px;
 }
 
</style>
