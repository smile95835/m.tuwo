<template>
    <div>
        <transition name="fade">
            <div class="page-cove" v-show="isShow"></div>
        </transition>

        <div class="page" v-show="isShow"></div>

        
        <transition name="slide">
            <div class="show-nav" v-show="isShow">
                <h1 @click="navHide">X</h1>
            </div>  
        </transition> 
       
    </div>
</template>
<script>
export default {
    data(){
        return {
            isShow:false
        }
    },
    mounted(){
        this.$pubsub.$on('show-nav',(val)=>{
            this.isShow = true;
        })
    },
    methods:{
        navHide(){
            this.isShow = false;
        }
    }
}
</script>
<style lang="scss" scoped>
.show-nav{
    width:70%;
    background: #fff;
    position: absolute;
    top:0;
    right:0;
    bottom:0.6rem;
    box-shadow:#000 0.1rem 0.1rem 0.24rem 0.04rem ;
}
.page{
    width:100%;
    height:100%;
    position: absolute;
    top:0;
    left:0;
}
.page-cove{
    width:100%;
    position: absolute;
    top:0.88rem;
    bottom:0;
    background: #000;
    opacity: 0.2;
}

@keyframes fadeIn {
    0%{opacity: 0;}
    100%{opacity: 0.2;}
}
@keyframes fadeOut {
    0%{opacity: 0.2;}
    100%{opacity: 0;}
}
.fade-enter-active{
    animation: fadeIn 400ms;
}
.fade-leave-active{
    animation: fadeOut 400ms;
}
@keyframes slideIn {
    0%{transform: translateX(100%);}
    100%{transform: translateX(0%);}
    // 0%{right: -100%;}
    // 100%{right: 0;}
}
@keyframes slideOut {
    0%{transform: translateX(0%);}
    100%{transform: translateX(100%);}
    // 0%{right: 0;}
    // 100%{right: -100%;}
}
.slide-enter-active{
    animation: slideIn 300ms;
}
.slide-leave-active{
    animation: slideOut 300ms;
}

</style>


