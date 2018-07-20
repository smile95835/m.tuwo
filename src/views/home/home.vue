<template>
<div>
    <div class="top">
        <div class="serch">
            <input type="text" />
            <img :src="navPng" @click="show()">
        </div>
        <home-content class="nav">
        <!-- <div class="nav"> -->
            <div class="wrap">
                <p><span :class="{active:isActive=='0'}">推荐</span></p>
                <p><span :class="{active:isActive=='1'}">网页</span></p>
                <p><span :class="{active:isActive=='2'}">插画</span></p>
                <p><span :class="{active:isActive=='3'}">动漫</span></p>
                <p><span :class="{active:isActive=='0'}">推荐</span></p>
                <p><span :class="{active:isActive=='1'}">网页</span></p>
                <p><span :class="{active:isActive=='2'}">插画</span></p>
                <p><span :class="{active:isActive=='3'}">动漫</span></p>
            </div>
        <!-- </div> -->
        </home-content>
        <nav-right></nav-right>
    </div>
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
            isActive:'0'
        }
    },
    components:{
        NavRight,
        HomeContent
    },
    methods:{
        show(){
            this.$pubsub.$emit('show-nav','你好');
        }
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
    .nav{
        // width:100%;
        // overflow-x:auto;
        background: #ff374a;
    }
    .wrap{
        width:200%;
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

