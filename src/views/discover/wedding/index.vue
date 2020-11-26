<template>
    <div>
        <CommonHead :title="title" :isNoLevelOne="isNoLevelOne"></CommonHead>
        <div>
            <van-tabs>
                <van-tab title="全部"></van-tab>
                <van-tab title="结婚请柬"></van-tab>
                <van-tab title="喜糖"></van-tab>
                <van-tab title="喜酒"></van-tab>
            </van-tabs>
        </div>
        <GoodsCategory :dataList="dataList"></GoodsCategory>
    </div>
</template>

<script>
import { CommonHead, GoodsCategory } from "@components";
export default {
    components: {
        CommonHead,
        GoodsCategory,
    },
    data() {
        return {
            title: "婚庆用品",
            isNoLevelOne: true,
            // avtive: "全部",
            dataList: [
                {
                    page: "",
                    imgUrl: require("../../../assets/img/GoodsCategory/one.png"),
                    description: "【喜糖·地久天长】巧罗纯 可可脂巧克力喜糖款",
                    price: "152.00",
                    stars: 53,
                },
                {
                    page: "",
                    imgUrl: require("../../../assets/img/GoodsCategory/two.png"),
                    description:
                        "【今世缘典藏18】42度浓 香型薄酒宴喜酒500ml...",
                    price: "350.00",
                    stars: 80,
                },
                {
                    page: "",
                    imgUrl: require("../../../assets/img/GoodsCategory/two.png"),
                    description: "菲寻 结婚婚庆纸杯加厚婚宴婚礼一次性大红杯子",
                    price: "3.55",
                    stars: 32,
                },
                {
                    page: "",
                    imgUrl: require("../../../assets/img/GoodsCategory/two.png"),
                    description:
                        "费列罗进口食品巧克力96粒结婚礼盒装喜糖配喜...",
                    price: "269.00",
                    stars: 120,
                },
            ],
        };
    },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "./style.less";
</style>