<template>
  <div id="app">
    <tab></tab>
    <router-view/>
  </div>
</template>
<script>
import Tab from '@/components/public/Tab.vue';
export default {
  components:{
    Tab
  }
}
</script>

<style lang="scss">

</style>
