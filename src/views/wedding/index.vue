<template>
  <div class="wedding">
    <CommonHead :title="title" :isNoLevelOne="isNoLevelOne"></CommonHead>
    <div>
      <van-tabs>
        <van-tab
          v-for="(item, index) in titleList"
          :key="index"
          :title="item"
          @touchend="getStoreList(index)"
        >
          <GoodsCategory :storeList="storeList"></GoodsCategory>
        </van-tab>
        <!-- <van-tab title="结婚请柬" @touchend="getStoreList">
                    <GoodsCategory :storeList="storeList"></GoodsCategory>
                </van-tab>
                <van-tab title="喜糖" @touchend="getStoreList">
                    <GoodsCategory :storeList="storeList"></GoodsCategory>
                </van-tab>
                <van-tab title="喜酒" @touchend="getStoreList">
                    <GoodsCategory :storeList="storeList"></GoodsCategory>
                </van-tab> -->
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { CommonHead, GoodsCategory } from '@components';
export default {
  components: {
    CommonHead,
    GoodsCategory
  },
  data() {
    return {
      title: '婚庆用品',
      isNoLevelOne: true,
      storeList: [],
      titleList: ['全部', '结婚请柬', '喜糖', '喜酒']
    };
  },
  // computed:{
  //     ...mapState(["storeList"])
  // },
  created() {
    this.getStoreList(1);
  },
  methods: {
    getStoreList(i) {
      console.log(i);
      const data = {};
      this.$services
        .useApi({
          method: 'get',
          data
        })
        .then(res => {
          // console.log(res)
          this.storeList = res.data.storeList;
        });
      // let api = "http://localhost:5050/user/login/500";
      // this.$axios({
      //     url:api,
      //     method:"GET"
      // }).then(res=>{
      //     this.storeList=res.data.storeList;
      // })
    }
  }
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "./style.less";
</style>
