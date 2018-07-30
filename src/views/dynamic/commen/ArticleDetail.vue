<template>
<div class="article">
    <div class="article-header">
        <div class="header-list header-list1" @click="goback()">返回</div>
        <div class="header-list2">图窝动态</div>
        <div class="header-list header-list3">分享</div>
    </div>
    <div class="article-content">
        <h3>你好</h3>
        <h3 class="article-title">{{detailData.title}}</h3>
    </div>
</div>
</template>

<script>
export default {
    props:{
       
    },
    data(){
        return{
            detailData:''
        }
    },
    methods:{
        goback(){
            this.$router.back()
        }
    },
    mounted(){
            this.$pubsub.$on('getArticleDetailData',(value)=>{
                this.detailData = value
                console.log(this.detailData)
            })         
      
        console.log(this) 
    }
}
</script>

<style lang="scss" scoped>
.article{
    width:100%;
    background: palegoldenrod;
    position:absolute;
    top:0;
    bottom:0;
    z-index:1;
    .article-header{
        height:0.48rem;
        background: #ff374a;
        line-height: 0.48rem;
        position: relative;
        text-align: center;
        .header-list{
            position: absolute;
            font-size: 0.18rem;
            color:#fff;
        }
        .header-list2{
            font-size: 0.18rem;
            color:#fff;
        }
        .header-list1{
            top:0;
            left:0.15rem;
        }
        .header-list3{
            top:0;
            right:0.15rem;
        }
    }
}
</style>
