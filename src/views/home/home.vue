<template>
<div class="home">
    <div class="top">
        <div class="serch">
            <input type="text" />
            <img :src="navPng" @click="show()">
        </div>
        <home-content class="nav" :width="width">
            <div class="wrap">
                <p v-for="(v,i) in dataArr" :key="i">
                    <span @click="isShow(v.i)" :class="{active:isActive==v.i}">{{v.title}}</span>
                </p>
            </div>
        </home-content>
    </div>
    <nav-right></nav-right>
    <h1>你好你好你好</h1>
</div>    
</template>
<script>
import navPng from '@/icon/nav.png'
import NavRight from '@/components/home/nav.vue'
import HomeContent from '@/components/home/HomeContent.vue'
export default {
    data(){
        return{
            navPng,
            isActive:0,
            dataArr:[
                {title:'推荐',i:0},{title:'网页',i:1},{title:'插画',i:2},{title:'动漫',i:3},
                {title:'学习',i:4},{title:'关注',i:5},{title:'UI',i:6},{title:'平面设计',i:7},
                {title:'工业/产品',i:8},{title:'摄影',i:9},{title:'空间',i:10},{title:'影视',i:11},
                {title:'陶艺',i:12},{title:'手工艺',i:13},{title:'纯艺术',i:14},{title:'服装',i:15},
                {title:'三维',i:16},{title:'其他',i:17}
            ],
            width:null
        }
    },
    components:{
        NavRight,
        HomeContent,
    },
    methods:{
        show(){
            this.$pubsub.$emit('show-nav');
        },
        isShow(v){
            this.isActive = v;
        }
    },
    created(){
        this.width = this.dataArr.length*25;
    }
}
</script>

<style lang="scss" scoped>
    div.top{
        box-sizing: border-box;
        padding-top:0.16rem;
        height:0.88rem;
        background: #ff374a;
    }
    .serch{
        position: relative;
        height:0.28rem;
    }
    .serch input{
        width:2.92rem;
        height:0.28rem;
        outline: none;
        border:none;
        position: absolute;
        left:0.16rem;
        top:0;
    }
    .serch img{
        width:0.2rem;
        position: absolute;
        top:0.04rem;
        right:0.16rem;
    }
    .scroll{
        width:450%;
    }
    .wrap{
        display: flex;
    }
    .nav p{
        flex:1;
        float: left;
        text-align: center;
        color:#fff;
        line-height: 0.44rem;
        font-size: 0.16rem;
        span.active{
            border-bottom:0.03rem solid #fff;
            padding-bottom:0.06rem
        }
    }
</style>

