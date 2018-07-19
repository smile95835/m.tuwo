<template>
<div class="content" ref="content">
    <div>
        <slot></slot>
    </div>
</div>
</template>


<script>
export default {
    props: {
        // 
    },
    methods: {
        refreshDOM(){
            this.scroll.refresh();
        }
    },
    mounted(){
        let scroll = new IScroll(this.$refs.content, {
            probeType: 3
        });
        this.scroll = scroll;
        scroll.on('beforeScrollStart', ()=>{
            scroll.refresh();
        });
        if(this.reciveScroll){
            scroll.on('scroll', ()=>{
                let disY = scroll.y - scroll.maxScrollY;
                this.$emit('onScroll', disY);
            })
        }
    }
}
</script>


<style scoped>
.content{
    background: #ebebeb;
    width: 100%;
    position: absolute;
    top: 50px;
    left: 0;
    bottom: 0;
    overflow: hidden;
}
</style>

