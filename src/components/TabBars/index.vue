<template>
  <div class="tabbars">
    <van-tabbar route active-color="#FD95AF" :fixed="false" inactive-color="#8E8E93">
      <van-tabbar-item replace to="/home" icon="home-o">
        首页
      </van-tabbar-item>
      <van-tabbar-item replace to="/discover" icon="eye-o">
        发现
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'TabBarsss',
  data() {
    return {
      active: '首页'
    };
  }
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
@import "./style.less";
</style>
