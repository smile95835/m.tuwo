<template>
<div>
    <ul class="dynamic-header">
        <li class="header-list header-list1" v-show="isActive == 'relevant'">动态</li>
        <li class="header-list header-list1" v-show="isActive == 'recommend'">推荐</li>
        <input type="text" placeholder="请输入想搜索的内容" class="header-list header-list3" v-show="isActive == 'follow'">
        <li class="header-list header-list2">发布</li>
    </ul>
    <ul class="dynamic-nav">
        <li class="nav-list" @click="checkList('follow')" :class="{active: isActive == 'follow'}"><span :class="{actives: isActive == 'follow'}">关注</span></li>
        <li class="nav-list" @click="checkList('recommend')" :class="{active: isActive == 'recommend'}"><span :class="{actives: isActive == 'recommend'}">相关推荐<i class="redDot"></i></span></li>
        <li class="nav-list" @click="checkList('relevant')" :class="{active: isActive == 'relevant'}"><span :class="{actives: isActive == 'relevant'}">动态</span></li>
    </ul>
    <router-view></router-view>
</div>
</template>

<script>
export default {
    data(){
        return{
            isActive:'follow'
        }
    },
    methods:{
        checkList(index){
            this.isActive = index
            this.$router.push({
                name:index
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.dynamic-header{
    height:0.48rem;
    background: #ff374a;
    line-height: 0.48rem;
    position: relative;
    .header-list{
        position: absolute;
        font-size: 0.16rem;
        display: inline-block;
        color:#fff;
    }
    .header-list1{
        left:1.64rem;
    }
    .header-list2{
        right:0.16rem;
    }
    .header-list3{
        width:2.46rem;
        height:0.28rem;
        font-size:0.12rem;
        color:#a5a5a5;
        padding-left:0.35rem;
        border:none;
        left:0.16rem;
        top:0.1rem;
    }
}
.dynamic-nav{
    height:0.52rem;
   
    display: flex;
    line-height: 0.52rem;
    border-bottom:0.02rem solid #f2f2f2;
    .nav-list{
        display:inline-block;
        
        flex:1;
        text-align: center;
        color:#b1b1b1;
        font-size:0.14rem;
        position: relative;
        .redDot{
            display: block;
            width:0.06rem;
            height:0.06rem;
            border-radius:50%;
            background: #ff374a;
            position:absolute;
            left:0.9rem;
            top:0.16rem;
        }
    }
    .nav-list.active{
        color:#343434;
        
    }
    .nav-list>span.actives{
        padding-bottom:0.16rem;
        border-bottom: 0.03rem solid #ff374a;
    }
}
</style>
