<template>
    <ul id="nav">
      <div class="border"></div>
      <li v-for="(v,i) in dataArr" :key="i" @click="switchAction(v.path)" :class="{active:isActive==v.path}">
          <img :src="v.src"/>
          <p>{{v.title}}</p>
      </li>
    </ul>
</template>
<script>
import homePng from '@/icon/home.png';
import rankingListPng from '@/icon/rankingList.png';
import dynamicPng from '@/icon/dynamic.png';
import myPng from '@/icon/my.png';
export default {
  data(){
    return {
      isActive:'/home',
      dataArr:[
        {
          title:'首页',
          path:'/home',
          src:homePng
        },
        {
          title:'排行榜',
          path:'/rankingList',
          src:rankingListPng
        },
        {
          title:'动态',
          path:'/dynamic',
          src:dynamicPng
        },
        {
          title:'我的',
          path:'/my',
          src:myPng
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

<style lang="scss" scoped>
  ul#nav{
    position: absolute;
    left:0;bottom:0;
    width:100%;
    background: #fcfcfc;
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
