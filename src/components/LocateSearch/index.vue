<template>
  <div>
    <ul class="home-top">
      <li class="locate">
        <p>{{ posAddress }}</p>
        <van-icon class="locate-icon" name="arrow-down" size="20" />
      </li>
      <li class="search">
        <van-field
          class="search-inp"
          v-model="value"
          clearable
          left-icon="search"
          placeholder="搜索想要找的内容"
        />
      </li>
      <li class="news">
        <van-icon class="news-icon" name="envelop-o" color="#FF69B4" size="25" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LocateSearch',
  data() {
    return {
      posAddress: '杭州市',
      value: ''
    };
  }
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "./style.less";
</style>
