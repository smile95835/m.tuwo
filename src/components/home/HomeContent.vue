<template>
<div class="content" ref="content">
    <div ref="scroll">
        <slot></slot>
    </div>
</div>
</template>


<script>
export default {
    props: {
        width:Number
    },
    methods: {
        refreshDOM(){
            this.scroll.refresh();
        }
    },
    mounted(){
        this.$refs.scroll.style.width = this.width+'%';
        let scroll = new IScroll(this.$refs.content, {
            probeType: 3,
            scrollX:true,
            scrollY:false
        });
        this.scroll = scroll;
        scroll.on('beforeScrollStart', ()=>{
            // scroll.refresh();
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
    background: #ff374a;
    width: 100%;
    overflow: hidden;
}
</style>

