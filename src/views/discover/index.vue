<template>
  <div class="discover">
    <CommonHead :title="title"></CommonHead>
    <img
      class="discover-top"
      src="../../assets/img/discover/discoverTop.png"
      alt=""
    />
    <div class="wedding-product">
      <h3>精品分类</h3>
      <ul class="wedding-product-classify">
        <li
          v-for="(item, index) in wedProductClassify"
          :key="index"
          @click="goPage(item.name)"
        >
          <img :src="item.imgUrl" alt="" />
          <p v-text="item.title"></p>
        </li>
      </ul>
    </div>
    <ul class="mask-layer-datas">
      <li
        v-for="(item, index) in maskLayerDatas"
        :key="index"
        @click="goPage(item.name)"
      >
        <img :src="item.imgUrl" alt="" />
        <p v-text="item.title"></p>
      </li>
    </ul>
    <ul class="shows">
      <li
        v-for="(item, index) in showsData"
        :key="index"
        @click="goPage(item.name)"
      >
        <img :src="item.imgUrl" alt="" />
        <p v-text="item.title"></p>
      </li>
    </ul>
    <TabBars></TabBars>
  </div>
</template>

<script>
import { CommonHead, TabBars } from '@components';
import { Dialog } from 'vant';
export default {
  name: 'Discover',
  components: {
    CommonHead,
    TabBars
  },
  data() {
    return {
      title: '发现',
      // 中间六个展示模块，未设置跳转
      wedProductClassify: [
        {
          title: '婚纱',
          name: 'weddingDress',
          imgUrl: require('../../assets/img/discover/weddingDress.png')
        },
        {
          title: '礼服',
          name: 'formalDress',
          imgUrl: require('../../assets/img/discover/formalDress.png')
        },
        {
          title: '婚鞋',
          name: 'weddingShoes',
          imgUrl: require('../../assets/img/discover/weddingShoes.png')
        },
        {
          title: '配饰',
          name: 'accessory',
          imgUrl: require('../../assets/img/discover/accessory.png')
        },
        {
          title: '婚庆用品',
          name: 'wedding',
          imgUrl: require('../../assets/img/discover/forWedding.png')
        },
        {
          title: '家居礼品',
          name: 'householdGifts',
          imgUrl: require('../../assets/img/discover/householdGifts.png')
        }
      ],
      maskLayerDatas: [
        {
          title: '最美手捧花',
          name: '',
          imgUrl: require('../../assets/img/discover/one.png')
        },
        {
          title: '精致的结婚请柬',
          name: '',
          imgUrl: require('../../assets/img/discover/two.png')
        },
        {
          title: '婚鞋这样选',
          name: '',
          imgUrl: require('../../assets/img/discover/three.png')
        },
        {
          title: '伴手礼看这里',
          name: '',
          imgUrl: require('../../assets/img/discover/four.png')
        }
      ],
      showsData: [
        {
          title: '五星酒店',
          name: '',
          imgUrl: require('../../assets/img/discover/showOne.png')
        },
        {
          title: '明星排场',
          name: '',
          imgUrl: require('../../assets/img/discover/showTwo.png')
        },
        {
          title: '韩式婚照',
          name: '',
          imgUrl: require('../../assets/img/discover/showThree.png')
        },
        {
          title: '环球旅拍',
          name: '',
          imgUrl: require('../../assets/img/discover/photoTour.png')
        }
      ]
    };
  },
  methods: {
    goPage(name) {
      if (name === 'wedding') {
        this.$router.push({
          name
        });
        // 只创建了wedding页面和photoTour页面可以进行跳转实验
      } else {
        Dialog.alert({
          message: '敬请期待'
        }).then(() => {
          // on close
        });
      }
    }
  }
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "./style.less";
</style>
