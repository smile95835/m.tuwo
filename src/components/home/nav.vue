<template>
    <div class="show-nav">
        <h1>qweqweqwewqe</h1>
    </div>
</template>
<script>
export default {
    mounted(){
        this.$pubsub.$on('show-nav',(val)=>{
            console.log(val);
        })
    }
}
</script>

