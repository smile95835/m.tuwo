<template>
<div class="follow">
    <content-iscroll>
    <p class="follow-title">
        <span :class="{active : showAction == 1}" @click="checkAction(1)">图窝</span>
        <span class="title-line">|</span>
        <span :class="{active : showAction == 2}" @click="checkAction(2)">文章</span>
    </p>
   
    <ul class="tuwo" v-show="showAction == 1">tuwo</ul>
    <ul class="article" v-show="showAction == 2" ref="article">
        <li class="article-list" v-for="item in articleData" :key="item.id" ref="article-list">
            <img :src="item.image" @click="goArticleDetail(item)"/>
            <p class="list-title">{{item.title}}</p>
            <p class="list-intro">{{item.genres | introFilter}}
                <span class="list-follow">关注</span>
                <span class="list-followed">已关注</span>
            </p>      
            <p class="list-name">
                <img :src="item.image" />
                <span class="list-name-word">{{item.name}}</span>
                <span class="reprint">转</span>
            </p>
        </li>
    </ul>
    </content-iscroll>
    <!-- <router-view></router-view> -->
</div>
</template>

<script>
import Vue from 'vue';
import ContentIscroll from './commen/ContentIscroll.vue';
import {getResultData} from './commen/resultReservice.js';
import {introFilter} from './commen/contentFilter.js';
Vue.filter('introFilter',introFilter)
export default {
    components:{
        ContentIscroll
    },
    data(){
        return{
            showAction:2,
            articleData:[],
        }
    },
    methods:{
        checkAction(index){
            this.showAction = index
        },
        goArticleDetail(detail){
            
            this.$router.push({
                name:'articledetail'
            })
            this.$pubsub.$emit('getArticleDetailData',detail)
        }
    },
    mounted(){
        getResultData().then(result=>{
            this.articleData = result
        })
    }
}
</script>


<style lang="scss" scoped>
.follow{
    background:#f2f2f2;
    .follow-title{
        padding: 0 0.16rem;
        background:#f2f2f2;
        font: size 0.14r;
        line-height: 0.34rem;
        color:#bfbfbf;
        span.active{
            color:#313131;
        }
        .title-line{
            display: inline-block;
            padding:0 0.05rem;
        }
    }
    .tuwo{
        background: palevioletred;
        padding: 0 0.16rem;
    }
    .article{
        padding-left:0.16rem;
        background: #f2f2f2;
        .article-list{
            width:1.66rem;
            display: inline-block;
            margin-right:0.1rem;
            background: #fff;
            margin-bottom: 0.15rem;
            img{
                width:100%;
                height:1.02rem;
            }
            .list-title{
                padding-left:0.1rem;
                font-size: 0.12rem;
            }
            .list-intro{
                padding-left:0.1rem;
                font-size: 0.12rem;
                color:#b6b6b6;
                position: relative;
                padding-bottom: 0.11rem;
                span{
                    position: absolute;
                    display: inline-block;
                    right:0.1rem;
                }
                border-bottom: 0.01rem solid #f8f7f7;
            }
            .list-name{
                position: relative;
                margin:0.1rem 0;
                padding-left:0.1rem;
                span{
                    position: absolute;
                    font-size: 0.12rem;
                    display: inline-block;
                    
                }
                .list-name-word{
                    top:0.07rem;
                    left:0.41rem;
                }
                .reprint{
                    top:0.07rem;
                    right:0.1rem;
                    width:0.18rem;
                    height:0.18rem;
                    border-radius:50%;
                    background: #ff374a;
                    text-align: center;
                    line-height: 0.18rem;
                    color:#fff;
                }
                img{
                    width:0.26rem;
                    height:0.26rem;
                    border-radius:50%;
                    
                }
            }
        }
    }
}
@keyframes fadeIn {
    0%   {transform:translateX(100%)}
    100% {transform:translateX(0)}
}
.fade-entry-active{
    animation:500ms;
}
@keyframes fadeOut {
    0%   {transform:translateX(0%)}
    100% {transform:translateX(100%)}
}
.fade-leave-active{
    animation: fadeOut 300ms;
}

</style>
