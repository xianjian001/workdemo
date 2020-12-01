<template>
  <div class="common-hd">
    <van-icon
      class="go-back"
      v-if="isNoLevelOne"
      name="arrow-left"
      size="30"
      @click="goBack"
    />
    <p v-text="title"></p>
    <img v-if="isShare" src="../../assets/img/rests/share.png" alt="" />
  </div>
</template>

<script>
export default {
  name: 'CommonHead',
  props: {
    title: {
      type: String,
      default() {
        return '';
      }
    },
    isNoLevelOne: {
      type: Boolean,
      default() {
        return;
      }
    },
    isShare: {
      type: Boolean,
      default() {
        return;
      }
    }
  },
  data() {
    return {};
  },
  // created(){
  //     console.log(this.$route)
  // },
  methods: {
    goBack() {
      this.$router.back();
    }
  }
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "./style.less";
</style>
