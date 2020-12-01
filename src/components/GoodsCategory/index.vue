<template>
  <ul class="goods-category">
    <li
      v-for="(item, index) in storeList"
      :key="index"
      @click="goCommodityDetails(item)"
    >
      <img :src="item.imgUrl" alt="" class="commodity-img" />
      <p v-text="item.description" class="commodity-description"></p>
      <div class="commodity-sales">
        <p>￥{{ item.price }}</p>
        <p>
          <img :src="starUrl" alt="" />
          <span v-text="item.stars"></span>
        </p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'GoodsCategory',
  props: {
    storeList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      starUrl: require('../../assets/img/GoodsCategory/star.png')
    };
  },
  methods: {
    goCommodityDetails(a) {
      this.$router.push({
        name: 'commodityDetails',
        query: {
          commodityDatas: a
        }
      });
    }
  }
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "./style.less";
</style>
