<template>
  <div class="shopping-car">
    <CommonHead :title="title" :isNoLevelOne="isNoLevelOne"></CommonHead>
    <div class="shopping-list">
      <ul class="store-list">
        <div class="store-name">
          <van-checkbox
            v-model="checkedStore"
            checked-color="#FD95AF"
          >
          </van-checkbox>
          <p>
            {{ commodityDatas.storeName }}
          </p>
        </div>

        <li class="commodity-list">
          <van-checkbox v-model="checkedCommodity" checked-color="#FD95AF">
          </van-checkbox>
          <div class="commodity-conts">
            <img :src="commodityDatas.imgUrl" alt="" />
            <div class="commodity-description">
              <p v-text="commodityDatas.description"></p>
              <div class="commodity-price">
                <p>￥{{ commodityDatas.price }}</p>
                <div>
                  <button @click="sec">-</button>
                  <p v-text="num"></p>
                  <button @click="add">+</button>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="settle-accounts">
      <van-checkbox v-model="checkedSum" checked-color="#FD95AF"></van-checkbox>
      <div class="clearing">
        <div class="clearing-content">
          <p class="total">
            合计：<span>￥{{ sum }}</span>
          </p>
          <p class="on-sale">
            <span>总额：￥{{ sum }}</span>
            <span>优惠：￥{{ discounts }}</span>
          </p>
        </div>
        <button class="payment-btn">
          去结算<span v-show="checkedSum && checkedCommodity"
            >({{ commonsityNum }})</span
          >
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { CommonHead } from '@components';
export default {
  name: 'ShoppingCar',
  components: {
    CommonHead
  },
  data() {
    return {
      title: '购物车',
      isNoLevelOne: true,
      checkedStore: false,
      checkedCommodity: false,
      checkedSum: false,
      commodityDatas: {},
      num: 0,
      discounts: 0,
      commonsityNum: 0
    };
  },
  created() {
    console.log(this.$route.query);
    this.commodityDatas = this.$route.query.commodityDatas;
  },
  computed: {
    sum() {
      return this.num * this.commodityDatas.price;
    }
  },
  methods: {
    sec() {
      this.num--;
      if (this.num <= 0) {
        this.num = 0;
      }
    },
    add() {
      this.num++;
    }
  }
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "./style.less";
</style>
