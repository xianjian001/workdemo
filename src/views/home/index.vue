<template>
  <div class="home">
    <LocateSearch></LocateSearch>
    <div class=".home-img">
      <img
        class="home-img-onside"
        src="../../assets/img/home/banner2.png"
        alt=""
      />
      <img
        class="home-img-center"
        src="../../assets/img/home/banner.png"
        alt=""
      />
      <img
        class="home-img-onside"
        src="../../assets/img/home/banner1.png"
        alt=""
      />
    </div>
    <ul class="home-classify">
      <li
        v-for="(item, index) in homeClassify"
        :key="index"
        @click="goPage(item.page)"
      >
        <img :src="item.imgUrl" alt="" />
        <p v-text="item.title"></p>
      </li>
    </ul>
    <ul class="activity">
      <li
        v-for="(item, index) in activity"
        :key="index"
        @click="goPage(item.page)"
      >
        <p v-text="item.title"></p>
        <img :src="item.imgUrl" alt="" />
      </li>
    </ul>
    <TabBars></TabBars>
  </div>
</template>

<script>
/**
 * 以下仅为事例代码，可以随意扩展修改
 */
// 工具类
import { formatDate } from 'utils';
import { LocateSearch, TabBars } from '@components';
import { Dialog } from 'vant';
export default {
  name: 'Home',
  components: {
    LocateSearch,
    TabBars
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      message: '现在时间是：' + formatDate(Date.now()),
      // 中间四个小模块
      homeClassify: [
        {
          title: '婚礼策划',
          name: 'weddingPlanner',
          imgUrl: require('../../assets/img/home/weddingPlanner.png')
        },
        {
          title: '婚纱摄影',
          name: 'weddingPhoto',
          imgUrl: require('../../assets/img/home/weddingPhoto.png')
        },
        {
          title: '婚宴商店',
          name: 'weddingShop',
          imgUrl: require('../../assets/img/home/weddingShop.png')
        },
        {
          title: '婚车租赁',
          name: 'weddingCar',
          imgUrl: require('../../assets/img/home/weddingCar.png')
        }
      ],
      // 下面大图活动模块
      activity: [
        {
          title: '官方活动',
          name: 'officialActivity',
          imgUrl: require('../../assets/img/home/officialActivity.png')
        },
        {
          title: '爱情之旅',
          name: 'LoveJourney',
          imgUrl: require('../../assets/img/home/LoveJourney.png')
        },
        {
          title: '第三活动',
          name: 'thirdAct',
          imgUrl: require('../../assets/img/home/officialActivity.png')
        },
        {
          title: '第四活动',
          name: 'fourAct',
          imgUrl: require('../../assets/img/home/LoveJourney.png')
        }
      ]
    };
  },

  created() {
    // this.movieComingSoon();
  },

  methods: {
    goPage(name) {
      Dialog.alert({
        message: '敬请期待'
      }).then(() => {
        // on close
      });
    }
    // movieComingSoon () {
    //   const data = {};
    //   this.$services.octocat({
    //     method: 'get',
    //     data
    //   }).then((res) => {
    //     console.log('接口请求成功：' + JSON.stringify(res, null, 2));
    //   }).catch((err) => {
    //     console.log('接口请求异常：' + err);
    //   });
    // }
  }
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "./style.less";
</style>
