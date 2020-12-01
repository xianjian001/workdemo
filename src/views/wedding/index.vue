<template>
  <div class="wedding">
    <CommonHead :title="title" :isNoLevelOne="isNoLevelOne"></CommonHead>
    <div>
      <van-tabs>
        <van-tab
          v-for="(item, index) in titleList"
          :key="index"
          :title="item"
          @click="getStoreList(index)"
        >
          <GoodsCategory
            v-if="httpSucc"
            :storeList="storeList"
          ></GoodsCategory>
          <div v-else class="http-err">
            <img :src="imgUrl" alt="" />
          </div>
        </van-tab>
        <!-- <van-tab title="结婚请柬" @click="getStoreList">
                    <GoodsCategory :storeList="storeList"></GoodsCategory>
                </van-tab>
                <van-tab title="喜糖" @click="getStoreList">
                    <GoodsCategory :storeList="storeList"></GoodsCategory>
                </van-tab>
                <van-tab title="喜酒" @click="getStoreList">
                    <GoodsCategory :storeList="storeList"></GoodsCategory>
                </van-tab> -->
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { CommonHead, GoodsCategory } from '@components';
import { Dialog } from 'vant';
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
      titleList: ['全部', '结婚请柬', '喜糖', '喜酒'],
      httpSucc: false,
      imgUrl:
        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1463752512,3224009081&fm=26&gp=0.jpg'
    };
  },
  created() {
    this.getStoreList(1);
  },
  methods: {
    getStoreList(i) {
      const data = {};
      this.$services
        .useApi({
          method: 'get',
          data
        })
        .then(res => {
          if (res) {
            this.httpSucc = true;
            this.storeList = res.data.storeList;
          } else {
            this.httpSucc = false;
            Dialog.alert({
              message: '网络错误,请重新进入！'
            }).then(() => {
              // on close
            });
          }
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
