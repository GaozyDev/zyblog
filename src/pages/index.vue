<template>
  <div class="content">
    <nav-header class="nav-header"></nav-header>
    <router-view class="router-view"></router-view>
  </div>
</template>
<script>
import NavHeader from "./../components/NavHeader";
export default {
  name: "nav-home",
  components: {
    NavHeader
  }
};
</script>
<style lang="scss">
.content {
  position: relative;
  .nav-header {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
  .router-view {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    z-index: -1;
  }
}
</style>