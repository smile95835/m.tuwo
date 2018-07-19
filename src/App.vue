<template>
  <div id="app">
    <ul id="nav">
      <div class="border"></div>
      <li v-for="(v,i) in dataArr" :key="i" @click="switchAction(v.path)" :class="{active:isActive==v.path}">
          <img :src="v.src"/>
          <p>{{v.title}}</p>
      </li>
    </ul>
    <router-view/>
  </div>
</template>
<script>
export default {
  data(){
    return {
      isActive:'/home',
      dataArr:[
        {
          title:'首页',
          path:'/home',
          src:'icon/home.png'
        },
        {
          title:'排行榜',
          path:'/rankingList',
          src:'icon/rankingList.png'
        },
        {
          title:'动态',
          path:'/dynamic',
          src:'icon/dynamic.png'
        },
        {
          title:'我的',
          path:'/my',
          src:'icon/my.png'
        }
      ]
    }
  },
  methods:{
    switchAction(v){
      this.isActive=v;
      this.$router.push(v);
    }
  }
}
</script>

<style lang="scss">
  ul#nav{
    position: absolute;
    left:0;bottom:0;
    width:100%;
    background: #f5f5f5;
    display: flex;
    color:#666;
    height:0.6rem;
    align-items:center; 
    img{
      width:0.24rem
    }
  }
  ul#nav li{
    flex:1;
    text-align: center;
  }
  #nav .border{
    position: absolute;
    height:1px;
    width:100%;
    border-top:1px solid #e5e5e5;
    top:-1px;
    left:0;
    transform:scaleX(50%);
  }
  .active{
    color:#ff374a;
  }
</style>
