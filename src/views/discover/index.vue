<template>
    <div class="discover">
        <CommonHead :title="title" :isNoLevelOne="isNoLevelOne"></CommonHead>
        <img
            class="discoverTop"
            src="../../assets/img/discover/discoverTop.png"
            alt=""
        />
        <div class="weddingProduct">
            <h3>精品分类</h3>
            <ul class="weddingProductClassify">
                <li
                    v-for="(item, index) in wedProductClassify"
                    :key="index"
                    @touchend="goPage(item.page)"
                >
                    <img :src="item.imgUrl" alt="" />
                    <p v-text="item.title"></p>
                </li>
            </ul>
        </div>
        <ul class="maskLayerDatas">
            <li
                v-for="(item, index) in maskLayerDatas"
                :key="index"
                @touchend="goPage(item.page)"
            >
                <img :src="item.imgUrl" alt="" />
                <p v-text="item.title"></p>
            </li>
        </ul>
        <ul class="shows">
            <li
                v-for="(item, index) in showsData"
                :key="index"
                @touchend="goPage(item.page)"
            >
                <img :src="item.imgUrl" alt="" />
                <p v-text="item.title"></p>
            </li>
        </ul>
    </div>
</template>

<script>
import { CommonHead } from "@components";
export default {
    name: "discover",
    components: {
        CommonHead,
    },
    data() {
        return {
            title: "发现",
            isNoLevelOne: false,
            // 中间六个展示模块，未设置跳转
            wedProductClassify: [
                {
                    title: "婚纱",
                    page: "weddingDress",
                    imgUrl: require("../../assets/img/discover/weddingDress.png"),
                },
                {
                    title: "礼服",
                    page: "formalDress",
                    imgUrl: require("../../assets/img/discover/formalDress.png"),
                },
                {
                    title: "婚鞋",
                    page: "weddingShoes",
                    imgUrl: require("../../assets/img/discover/weddingShoes.png"),
                },
                {
                    title: "配饰",
                    page: "accessory",
                    imgUrl: require("../../assets/img/discover/accessory.png"),
                },
                {
                    title: "婚庆用品",
                    page: "wedding",
                    imgUrl: require("../../assets/img/discover/forWedding.png"),
                },
                {
                    title: "家居礼品",
                    page: "householdGifts",
                    imgUrl: require("../../assets/img/discover/householdGifts.png"),
                },
            ],
            maskLayerDatas: [
                {
                    title: "最美手捧花",
                    page: "",
                    imgUrl: require("../../assets/img/discover/one.png"),
                },
                {
                    title: "精致的结婚请柬",
                    page: "",
                    imgUrl: require("../../assets/img/discover/two.png"),
                },
                {
                    title: "婚鞋这样选",
                    page: "",
                    imgUrl: require("../../assets/img/discover/three.png"),
                },
                {
                    title: "伴手礼看这里",
                    page: "",
                    imgUrl: require("../../assets/img/discover/four.png"),
                },
            ],
            showsData: [
                {
                    title: "五星酒店",
                    page: "",
                    imgUrl: require("../../assets/img/discover/showOne.png"),
                },
                {
                    title: "明星排场",
                    page: "",
                    imgUrl: require("../../assets/img/discover/showTwo.png"),
                },
                {
                    title: "韩式婚照",
                    page: "",
                    imgUrl: require("../../assets/img/discover/showThree.png"),
                },
                {
                    title: "环球旅拍",
                    page: "photoTour",
                    imgUrl: require("../../assets/img/discover/photoTour.png"),
                },
            ],
        };
    },
    methods: {
        goPage(page) {
            console.log(page);
            this.$router.push("/discover/" + page);
            // 只创建了wedding页面和photoTour页面可以进行跳转实验
        },
    },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "./style.less";
</style>