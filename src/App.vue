<template lang="html">
  <div>
    <top></top>
    <banner></banner>
    <div class="bigBox">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <foot></foot>
    <BackTop></BackTop>
  </div>
</template>
<script>
import router from './router/index';
import top from './components/base/top.vue'
import foot from './components/base/foot.vue'
import banner from './components/base/banner.vue';
export default {
  data(){
    return{
      data : `这是第二杯锟斤拷`
    }
  },
  components:{
    top: top,
    foot: foot,
    banner: banner
  },
  router
}
</script>
<style lang="scss">
html,body{
  width: 100%;
  height: 100%;
}
body{
  background: url('./components/img/bg.png');
}
.bigBox{
  min-height: 100vh;
}
</style>
